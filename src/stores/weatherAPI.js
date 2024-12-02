import { ref } from 'vue';
import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone); 

export const useWeatherStore = defineStore('weatherData', () => {
  let locationData = ref({});
  let lat = ref("");
  let lon = ref("");
  let tz = ref("");
  let currWeatherData = ref({});
  let currWeatherShortDescr = ref("");  
  let currWeatherIcon = ref("");
  let currTemp = ref(0);
  let currHumidity = ref(0);
  let currWindSpeed = ref(0);
  let currWindGust = ref(0);
  let currWindDirection = ref(0); 
  let currPressure = ref(0); 
  let sunrise = ref("");
  let sunset = ref("");

  const calcPressure = (apiPressure) => {
    let tempPressure = (apiPressure / 33.8639).toFixed(2);
    return parseFloat(tempPressure);
  };

  const getCurrentWeather = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let apiUrl = `${import.meta.env.VITE_OPENWEATHERMAP_API_URL}weather?lat=${lat.value}&lon=${lon.value}&units=imperial&appid=${import.meta.env.VITE_WEATHER_API_APPID}`;
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
      sunrise.value = dayjs.unix(result.sys.sunrise).tz(tz.value).format('h:mm a');
      sunset.value = dayjs.unix(result.sys.sunset).tz(tz.value).format('h:mm a');
    })
    .catch( (error) => console.error(error) ); 
  };

  return { locationData, lat, lon, tz, sunrise, sunset, currWeatherData, currTemp, currWeatherShortDescr, currWeatherIcon, 
    currWindSpeed, currHumidity, currPressure, getCurrentWeather };
});
