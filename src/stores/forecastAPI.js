import { ref } from 'vue';
import { defineStore } from 'pinia';
import dayjs from 'dayjs';

export const useForecastStore = defineStore('forecastData', () => {

  let lat = ref("");
  let lon = ref("");
  let forecastData = ref({});
  let fcDataSumArr = ref([]);
  let dayTextSaved = "";
  let dayText = "";
  let dayFcObj = {};
  

  const tabulateFcData = (fcListArr) => {
    let currDayText = dayjs().format('YYYY-MM-DD');
    fcListArr.forEach( (fcItem, fcIdx) => {
      // if (fcIdx == fcListArr.length - 1) {
      //   fcDataSumArr.value.push(dayFcObj);
      // };
      dayText = fcItem.dt_txt.substr(0, 10);
      if (dayText !== currDayText) {
        if (dayText === dayTextSaved ) {
          if (fcItem.main.temp > dayFcObj.hiTemp) dayFcObj.hiTemp = parseInt(fcItem.main.temp);
          if (fcItem.main.temp < dayFcObj.lowTemp) dayFcObj.lowTemp = parseInt(fcItem.main.temp);
          if (fcItem.wind.speed > dayFcObj.wind) dayFcObj.wind = parseInt(fcItem.wind.speed);
          if (fcItem.wind.gust > dayFcObj.gust) dayFcObj.gust = parseInt(fcItem.wind.gust);
          if (fcItem.main.humidity > dayFcObj.humidity) dayFcObj.humidity = parseInt(fcItem.main.humidity);
          if (fcItem.weather[0].icon > dayFcObj.icon) dayFcObj.icon = fcItem.weather[0].icon;
        } else {
          if (dayTextSaved === '') {
            dayTextSaved = dayText;
            dayFcObj = {
              dayText: dayText,
              hiTemp: parseInt(fcItem.main.temp), 
              lowTemp: parseInt(fcItem.main.temp),
              wind: parseInt(fcItem.wind.speed),
              gust: parseInt(fcItem.wind.gust),
              humidity: parseInt(fcItem.main.humidity),
              icon: fcItem.weather[0].icon  
            };
          } else {
            fcDataSumArr.value.push(dayFcObj);
            dayTextSaved = dayText;
            dayFcObj = {
              dayText: dayText,
              hiTemp: parseInt(fcItem.main.temp), 
              lowTemp: parseInt(fcItem.main.temp),
              wind: parseInt(fcItem.wind.speed),
              gust: parseInt(fcItem.wind.gust),
              humidity: parseInt(fcItem.main.humidity),
              icon: fcItem.weather[0].icon
            };
          };
        };
      };
    })
    // console.log(`--- fcDataSumArr ---`);
    // console.log(fcDataSumArr.value);
  };
  
  const getForecastData = async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    let apiUrl = `${import.meta.env.VITE_OPENWEATHERMAP_API_URL}forecast?lat=${parseFloat(lat.value)}&lon=${parseFloat(lon.value)}&units=imperial&appid=${import.meta.env.VITE_WEATHER_API_APPID}`;
    fetch(apiUrl,requestOptions )
      .then( response => response.json() )
      .then( result => forecastData.value = Object.assign(result)  )
      .then( () => tabulateFcData(forecastData.value.list) )
      .catch( (error) => console.error(error) ); 
  };

  return { lat, lon, forecastData, getForecastData, fcDataSumArr };
});
