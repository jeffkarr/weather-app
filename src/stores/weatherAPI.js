import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useWeatherStore = defineStore('weatherData', () => {

  let locationData = ref({});
  let locationCityState = ref("");
  let locationCoordinates = ref([]);
  let lat = ref("");
  let lon = ref("");
  let currWeatherData = ref({});
  let currWeatherShortDescr = ref("");  
  let currWeatherIcon = ref("");
  let currTemp = ref(0);
  let currHumidity = ref(0);
  let currWindSpeed = ref(0);
  let currWindGust = ref(0);
  let currWindDirection = ref(0); 
  let currPressure = ref(0); 

  const parseLocData = (locObj) => {
    if (locObj) {
      locationCityState.value = locObj.city;
      locationCoordinates.value = locObj.location.split(',');
      lat.value = locationCoordinates.value[0];
      lon.value = locationCoordinates.value[1]; 

      getCurrentWeather();
    };
  };

  const calcPressure = (apiPressure) => {
    let tempPressure = (apiPressure / 33.8639).toFixed(2);
    return parseFloat(tempPressure);
  };

  const getCurrentWeather = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let apiUrl = `${import.meta.env.VITE_WEATHER_API_URL}?lat=${parseFloat(lat.value)}&lon=${parseFloat(lon.value)}&units=imperial&appid=${import.meta.env.VITE_WEATHER_API_APPID}`;
    fetch(apiUrl,requestOptions )
      .then( (response) => response.json() )
      .then( (result) => { 
        currWeatherData.value = Object.assign(result);
        currTemp.value = parseInt(result.main.temp);
        currHumidity.value = parseInt(result.main.humidity);
        currWindSpeed.value = parseInt(result.wind.speed);
        currWindGust.value = parseInt(result.wind.gust);
        currWindDirection.value = parseInt(result.wind.deg);  
        currWeatherShortDescr.value = result.weather[0].main;
        currWeatherIcon.value = result.weather[0].icon;    
        currPressure.value = calcPressure(result.main.pressure);
      })
      .catch( (error) => console.error(error) ); 
  };

  return { locationData, locationCityState, locationCoordinates, lat, lon, 
    currWeatherData, currTemp, currWeatherShortDescr, currWeatherIcon, currWindSpeed, currHumidity, currPressure, parseLocData }
});
