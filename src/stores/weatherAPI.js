import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weatherData', () => {

  let locationData = ref({});
  let locationCityState = ref("");
  let locationCoordinates = ref([]);
  let lat = ref("");
  let lon = ref("");
  
  const parseLocData = (locObj) => {
    if (locObj) {
      locationCityState.value = locObj.city;
      locationCoordinates.value = locObj.location.split(',');
      lat.value = locationCoordinates.value[0];
      lon.value = locationCoordinates.value[1]; 
    };
  };

  return { locationData, locationCityState, locationCoordinates, lat, lon, parseLocData }
})
