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
  
  const selectedItem = ref();

  const citiesStore = useCitiesStore();

  citiesStore.getCities();

  const weatherStore = useWeatherStore();
 
  const storeLocWeather = () =>{ 
    if (!selectedItem.value) {
      weatherStore.locationData = {};
      weatherStore.locationCityState = "";
      weatherStore.locationCoordinates = [];
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
      weatherStore.parseLocData(selectedItem.value);
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
