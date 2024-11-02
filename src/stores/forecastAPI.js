import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useForecastStore = defineStore('forecastData', () => {

  let lat = ref("");
  let lon = ref("");
  let forecastData = ref({});
  
  const getForecastData = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let apiUrl = `${import.meta.env.VITE_OPENWEATHERMAP_API_URL}forecast?lat=${parseFloat(lat.value)}&lon=${parseFloat(lon.value)}&units=imperial&appid=${import.meta.env.VITE_WEATHER_API_APPID}`;
    fetch(apiUrl,requestOptions )
      .then( (response) => response.json() )
      .then( (result) => { 
        forecastData.value = Object.assign(result);
      })
      .catch( (error) => console.error(error) ); 
  };

  return { lat, lon, forecastData, getForecastData };
});
