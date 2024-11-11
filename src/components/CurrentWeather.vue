<template>

  <h2 v-if="currTemp" class="curr-weather-hdr">Current Weather</h2>

  <div v-if="currTemp" id="content">
    <div id="weather-icon">
      <div id="weather-img-container">
        <img id="weather-img" :src=weatherIconImg />
      </div>
    </div>
    <div class="temp">
      <div id="temp-nbr">
        {{ currTemp }}
        <span id="degrees">o</span>
        <span id="fahrenheit">F</span>
        </div>
    </div>
    <div class="description">
      <h3>{{ currWeatherShortDescr }}</h3>
    </div>
    <div id="wind-hdr">
      <p>Wind</p>
    </div>
    <div id="humidity-hdr">
      <p>Humidity</p>
    </div>
    <div id="pressure-hdr">
      <p>Pressure</p>
    </div>
    <div id="wind-val">
      <p>{{ currWindSpeed }} mph</p>
    </div>
    <div id="humidity-val">
      <p>{{ currHumidity }} %</p>
    </div>
    <div id="pressure-val">
      <p>{{ currPressure }} in</p>
    </div>
  </div>

</template>

<script setup>
  import { ref, watch } from "vue";
  import { storeToRefs } from 'pinia'
  import { useWeatherStore } from '../stores/weatherAPI';
  import weatherIconsArr from '../data/weather-icons';

  const weatherIconImg = ref("");

  const weatherStore = useWeatherStore();

  const { lat, lon, currTemp, currWeatherShortDescr, currWeatherIcon, currWindSpeed, currHumidity, currPressure, currWeatherData } = storeToRefs( weatherStore ); 

  const getWeatherIcon = () => {
    if (currWeatherIcon.value) {
      weatherIconsArr.value = weatherIconsArr;
      weatherIconsArr.value.forEach( item => {
        if (item.icon_id === currWeatherIcon.value) {
          weatherIconImg.value = item.icon_img;
        }
      }) 
    } else {
      weatherIconImg.value = "";
    };

  };

  watch( () => weatherStore, (newData) => { getWeatherIcon(); }, {deep:true});

</script>

<style scoped>
  .curr-weather-hdr {
    grid-column: 1/7;
    text-align: center;
    color: #fff;
    font-size: 6vw;
  }
  #content {
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(30px, auto);
    grid-gap: 5px;
    color: #fff;
  }
  #weather-icon {
    grid-column: 1/5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #weather-img-container {
    grid-column: 1/5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #weather-img {
    width: 100%;
    height: auto;
  }
  #wind-hdr {
    grid-column: 1/5;
    grid-row: 2/3;
    color:#fff;
    font-size: clamp(3.5vw, 4vw, 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #humidity-hdr {
    grid-column: 5/9;
    grid-row: 2/3;
    color:#fff;
    font-size: clamp(3.5vw, 4vw, 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #pressure-hdr {
    grid-column: 9/13;
    grid-row: 2/3;
    color:#fff;
    font-size: clamp(3.5vw, 4vw, 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #wind-val {
    grid-column: 1/5;
    grid-row: 3/4;
    color:#fff;
    font-size: clamp(3.5vw, 4vw, 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #humidity-val {
    grid-column: 5/9;
    grid-row: 3/4;
    color:#fff;
    font-size: clamp(3.5vw, 4vw, 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #pressure-val {
    grid-column: 9/13;
    grid-row: 3/4;
    color:#fff;
    font-size: clamp(3.5vw, 4vw, 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .temp {
    grid-column: 5/9;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  #temp-nbr {
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(11vw, 12vw, 13vw);
    padding: 1rem;
    color: #fff;
  }
  #degrees {
    position: sticky;
    padding-bottom: 2rem;
    font-size: 3.0vh;
    color: #fff;
  }
  #fahrenheit {
    position: sticky;
    font-size: 3.5vh;
    padding-bottom: 1rem;
    padding-left: .5rem;
    margin-left: 0;
    color: #fff;
  }
  .description {
    grid-column: 9/13;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(3vw, 4vw, 5vw);
    padding: 10px;  
  }

  @media screen and (min-width: 500px) and (max-width: 1023px)  {
    .curr-weather-hdr {
      grid-column: 1/7;
      font-size: 5vw;
    }
    #temp-nbr {
      position: sticky;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(3em, 11vw, 6em);
      padding: 1rem;
      color: #fff;
    }
    #degrees {
      position: sticky;
      padding-bottom: 3rem;
      font-size: 3.0vw;
      color: #fff;
    }
    #fahrenheit {
      position: sticky;
      font-size: 5.0vw;
      padding-bottom: 1rem;
      padding-left: .5rem;
      margin-left: 0;
      color: #fff;
    }
  }

  @media screen and (min-width: 1024px) {
    .curr-weather-hdr {
      grid-column: 1/7;
      font-size: 2.25vw;
    }
    #temp-nbr {
      position: sticky;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3em;
      padding: 1rem;
      color: #fff;
    }
    #degrees {
      position: sticky;
      padding-bottom: 2rem;
      font-size: 2.0vh;
      color: #fff;
    }
    #fahrenheit {
      position: sticky;
      font-size: 3.0vh;
      padding-bottom: 1rem;
      padding-left: .5rem;
      margin-left: 0;
      color: #fff;
    }
    .description {
      font-size: 1.5vw;
      padding: 10px;  
    }
    #wind-hdr {
      grid-column: 1/5;
      grid-row: 2/3;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #humidity-hdr {
      grid-column: 5/9;
      grid-row: 2/3;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #pressure-hdr {
      grid-column: 9/13;
      grid-row: 2/3;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #wind-val {
      grid-column: 1/5;
      grid-row: 3/4;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #humidity-val {
      grid-column: 5/9;
      grid-row: 3/4;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #pressure-val {
      grid-column: 9/13;
      grid-row: 3/4;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


</style>