<template>
    <Select 
      class="loc-select" 
      v-model="selectedItem" 
      @change="storeLocWeather"
      showClear filter
      :options="citiesStore.items" 
      optionLabel="city"
      placeholder="Select a City" 
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
    } else {
      weatherStore.locationData = selectedItem.value;
      parseLocData(selectedItem.value);
    };
  };

</script>

<style scoped>
  .loc-select {
    width: 90vw;
    height: 3rem;
  }
  .p-select {
    text-align: center
  }

  @media screen and (min-width: 1275px) {
    .loc-select {
      width: 50vw;
      height: 3rem;
    }
  }

</style>
