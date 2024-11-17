<template>
  
  <InputGroup>
    <Select 
      class="loc-select" 
      v-model="selectedItem" 
      @change="storeLocWeather"
      showClear filter
      :options="citiesStore.items" 
      optionLabel="city"
      placeholder="Select a city for weather information" 
      :virtualScrollerOptions="{ itemSize: 16 }"
      :resetFilterOnHide=true
      size="large"
    />
    <InputGroupAddon v-show="showSaveBtn || showRemoveBtn">
      <Button v-if="showSaveBtn" severity="help" @click="setCity" v-tooltip.left="'Click here to save City'">
        <i class="pi pi-bookmark-fill"></i>
      </Button>
      <Button v-if="showRemoveBtn" severity="warn" @click="removeCity" v-tooltip.left="'Click here to remove City'">
      <i class="pi pi-trash"></i>
      </Button>
    </InputGroupAddon>
  </InputGroup>

</template>

<script setup>
  import { ref } from "vue";
  import Select from 'primevue/select';
  import InputGroup from 'primevue/inputgroup';
  import InputGroupAddon from 'primevue/inputgroupaddon';
  import Button from 'primevue/button';

  import { useCitiesStore } from '../stores/cities';
  import { useWeatherStore } from '../stores/weatherAPI';
  import { useForecastStore } from '../stores/forecastAPI';
  
  const selectedItem = ref({"city": "Denver,CO","location": "39.762,-104.8758"});
  const defaultItem = ref({"city": "Denver,CO","location": "39.762,-104.8758"});
  let locationCityState = ref("");
  let locationCoordinates = ref([]);
  let showSaveBtn = ref();
  let savedCity = ref({});
  let savedCityStr = ref("");
  let showRemoveBtn = ref(false);
  const citiesStore = useCitiesStore();
  citiesStore.getCities();
  const weatherStore = useWeatherStore();
  const forecastStore = useForecastStore();
  const emit = defineEmits(['locationCleared']);
  
  const parseLocData = (locObj) => {
    if (locObj) {
      locationCityState = locObj.city;
      locationCoordinates = locObj.location.split(',');
      weatherStore.lat = locationCoordinates[0];
      forecastStore.lat = locationCoordinates[0];
      weatherStore.lon = locationCoordinates[1]; 
      forecastStore.lon = locationCoordinates[1];
      weatherStore.getCurrentWeather();
      forecastStore.getForecastData();
    }; 
  };
 
  const setCity = () => {
    localStorage.setItem('weatherAppLoc', JSON.stringify(selectedItem.value) );
    savedCity.value = selectedItem.value;
    showRemoveBtn.value = true; 
    showSaveBtn.value = false;
  };
  const removeCity = () => {
    localStorage.removeItem('weatherAppLoc');
    showRemoveBtn.value = false;
    showSaveBtn.value = false;  
  };

  const initStores = () => {
    weatherStore.locationData = {};
    weatherStore.lat = "";
    weatherStore.lon = ""; 
    weatherStore.currWeatherData = {};
    weatherStore.currWeatherShortDescr = "";  
    weatherStore.currWeatherIcon = "";
    weatherStore.currTemp = 0;
    weatherStore.currHumidity = 0;
    weatherStore.currWindSpeed = 0;
    weatherStore.currWindGust = 0;
    weatherStore.currWindDirection = 0;  
    weatherStore.currPressure = 0;
    forecastStore.forecastData = {};
    forecastStore.fcDataSumArr = []; 
    showSaveBtn.value = false;
    showRemoveBtn.value = false; 
    emit('locationCleared', true); 
  }

  const storeLocWeather = () =>{ 
    // when locationBar has been manually cleared
    if (!selectedItem.value) {
      initStores();
    } else {
      savedCityStr.value = localStorage.getItem('weatherAppLoc');
      savedCity.value = JSON.parse(savedCityStr.value);
      if (savedCity.value) {
        if (selectedItem.value.city === defaultItem.value.city) {
          selectedItem.value = savedCity.value;
          showRemoveBtn.value = true;
          showSaveBtn.value = false;
        } 
        else if (selectedItem.value.city !== defaultItem.value.city) {
          showRemoveBtn.value = false;
          showSaveBtn.value = true;
        };
      } else {
        if (selectedItem.value.city !== 'Denver,CO') {
          showSaveBtn.value = true;
        };
      }; 
      weatherStore.locationData = selectedItem.value;
      parseLocData(selectedItem.value);
      emit('locationCleared', false); 
    };
  };

  storeLocWeather();

</script>

<style scoped>
  .loc-select {
    width: 100vw;
    height: 100%;
    font-size: 16px;
  }
  .p-select {
    text-align: center;
    align-self: center;
  }
  .p-inputgroupaddon {
    padding: 0px 5px;
  }
  .p-button:not(:disabled):hover {
    background: #8080ff;
  }
  @media screen and (min-width: 1023px) {
    .loc-select {
      width: 50vw;
      height: 100%;
      max-width: 880px;
    }
  }

</style>
