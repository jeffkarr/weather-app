<template>

  <h2 class="curr-weather-hdr">Current Weather</h2>

  <div id="content">
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
      <p>{{ currHumidity }}%</p>
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

  const { currTemp, currWeatherShortDescr, currWeatherIcon, currWindSpeed, currHumidity, currPressure } = storeToRefs( weatherStore ); 

  const getWeatherIcon = () => {
    console.log('--- inside getWeatherIcon function ---');

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

  watch( () => weatherStore, (newData) => {

    getWeatherIcon();

  }, {deep:true})

;

</script>

<style scoped>

  .curr-weather-hdr {
    grid-column: 1/7;
    text-align: center;
    color: #fff;
  }
  #content {
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(30px, auto);
    grid-gap: 5px;
    color: #fff;
    /* background: brown;
    padding: 10px;   */
  }
  #weather-icon {
    grid-column: 1/5;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: yellow;
    padding: 10px;  */
  }
  #weather-img-container {
    grid-column: 1/5;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: yellow;
    padding: 10px;  */
  }
  #weather-img {
    width: 100%;
    height: auto;
  }
  #wind-hdr {
    grid-column: 1/5;
    grid-row: 2/3;
    color:#fff;
    font-size: clamp(3vw, 2.5vw, 3.5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: red;
    padding: 10px;  */
  }
  #humidity-hdr {
    grid-column: 5/9;
    grid-row: 2/3;
    color:#fff;
    font-size: clamp(3vw, 2.5vw, 3.5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: skyblue;
    padding: 10px;  */
  }
  #pressure-hdr {
    grid-column: 9/13;
    grid-row: 2/3;
    color:#fff;
    font-size: clamp(3vw, 2.5vw, 3.5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: lawngreen;
    padding: 10px;  */
  }
  #wind-val {
    grid-column: 1/5;
    grid-row: 3/4;
    color:#fff;
    font-size: clamp(3vw, 2.5vw, 3.5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: red;
    padding: 10px;  */
  }
  #humidity-val {
    grid-column: 5/9;
    grid-row: 3/4;
    color:#fff;
    font-size: clamp(3vw, 2.5vw, 3.5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: skyblue;
    padding: 10px;  */
  }
  #pressure-val {
    grid-column: 9/13;
    grid-row: 3/4;
    color:#fff;
    font-size: clamp(3vw, 2.5vw, 3.5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: lawngreen;
    padding: 10px;  */
  }
  .temp {
    grid-column: 5/9;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /* background: orange;
    padding: 10px;   */
  }
  #temp-nbr {
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    /* font-size: clamp(2.75em, 4em, 5em); */
    /* font-size: 12vw; */
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
    /* background: purple; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(3vw, 4vw, 5vw);
    padding: 10px;  
  }

  @media screen and (min-width: 600px) {
    .curr-weather-hdr {
      grid-column: 1/7;
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
      /* background: red; */
    }
    #humidity-hdr {
      grid-column: 5/9;
      grid-row: 2/3;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background: skyblue; */
    }
    #pressure-hdr {
      grid-column: 9/13;
      grid-row: 2/3;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background: lawngreen; */
    }
    #wind-val {
      grid-column: 1/5;
      grid-row: 3/4;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background: red; */
    }
    #humidity-val {
      grid-column: 5/9;
      grid-row: 3/4;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background: skyblue; */
    }
    #pressure-val {
      grid-column: 9/13;
      grid-row: 3/4;
      color:#fff;
      font-size: 1.75vw;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background: lawngreen; */
    }
  }


</style>