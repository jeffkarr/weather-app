import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useWeatherStore = defineStore('weatherData', () => {

  let locationData = ref({});
  let locationCityState = ref("");
  let locationCoordinates = ref([]);
  let lat = ref("");
  let lon = ref("");
  let currWeatherData = ref({});

  const parseLocData = (locObj) => {
    if (locObj) {
      locationCityState.value = locObj.city;
      locationCoordinates.value = locObj.location.split(',');
      lat.value = locationCoordinates.value[0];
      lon.value = locationCoordinates.value[1]; 

      getCurrentWeather();
    };
  };

  const getCurrentWeather = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let apiUrl = `${import.meta.env.VITE_WEATHER_API_URL}?lat=${parseFloat(lat.value)}&lon=${parseFloat(lon.value)}&units=imperial&appid=${import.meta.env.VITE_WEATHER_API_APPID}`;

    fetch(apiUrl,requestOptions )
      .then( (response) => response.json() )
      .then( (result) => { currWeatherData.value = result })
      .catch( (error) => console.error(error) ); 

  };

  return { locationData, locationCityState, locationCoordinates, lat, lon, currWeatherData, parseLocData }
});
