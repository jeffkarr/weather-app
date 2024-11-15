<template>
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
    />
</template>

<script setup>
  import { ref } from "vue";
  import Select from 'primevue/select';
  import { useCitiesStore } from '../stores/cities';
  import { useWeatherStore } from '../stores/weatherAPI';
  import { useForecastStore } from '../stores/forecastAPI';
  
  const selectedItem = ref();
  let locationCityState = ref("");
  let locationCoordinates = ref([]);

  const citiesStore = useCitiesStore();

  citiesStore.getCities();

  const weatherStore = useWeatherStore();

  const forecastStore = useForecastStore();

  const emit = defineEmits(['locationCleared']);

  // on initial load.
  emit('locationCleared', true); 

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
 
  const storeLocWeather = () =>{ 
    if (!selectedItem.value) {
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
      emit('locationCleared', true); 
    } else {
      weatherStore.locationData = selectedItem.value;
      parseLocData(selectedItem.value);
      emit('locationCleared', false); 
    };
  };

</script>

<style scoped>
  .loc-select {
    width: 100vw;
    height: 3rem;
    font-size: 16px;
  }
  .p-select {
    text-align: center
  }

  @media screen and (min-width: 1023px) {
    .loc-select {
      width: 50vw;
      max-width: 880px;
      height: 3rem;
    }
  }

</style>
