<template>
  <div>
    <h2 class="forecast-hdr">5 Day Forecast</h2>
    <div id="content">
      <div id="day1">
        <h4>{{ day1Date }}</h4>
        <div class="icon-container">
          <img id="day1-img" :src=day1Icon />
        </div>
        <div class="temp">
          {{ day1Obj.hiTemp }}
          <span class="degrees">o</span>
          <span class="fahrenheit">F</span>
        </div>
        <div class="humidity">
          <div>Humidity</div>
          <div><span>&nbsp;&nbsp;</span>{{ day1Obj.humidity }} %</div>
        </div>
        <div class="wind">
          <div>Wind</div>
          <div><span>&nbsp;&nbsp;&nbsp;</span>{{ day1Obj.wind }} mph</div>
        </div>
        <div class="wind-gust">
          <div>Gusts</div>
          <div><span>&nbsp;&nbsp;</span>{{ day1Obj.gust }} mph</div>
        </div>
      </div>
      <div id="day2">
        <h4>{{ day2Date }}</h4>
        <div class="icon-container">
          <img id="day2-img" :src=day2Icon />
        </div>
        <div class="temp">
          {{ day2Obj.hiTemp }}
          <span class="degrees">o</span>
          <span class="fahrenheit">F</span>
        </div>
        <div class="humidity">
          <div>Humidity</div>
          <div><span>&nbsp;&nbsp;</span>{{ day2Obj.humidity }} %</div>
        </div>
        <div class="wind">
          <div>Wind</div>
          <div><span>&nbsp;&nbsp;&nbsp;</span>{{ day2Obj.wind }} mph</div>
        </div>
        <div class="wind-gust">
          <div>Gusts</div>
          <div><span>&nbsp;&nbsp;</span>{{ day2Obj.gust }} mph</div>
        </div>
      </div>
      <div id="day3">
        <h4>{{ day3Date }}</h4>
        <div class="icon-container">
          <img id="day3-img" :src=day3Icon />
        </div>
        <div class="temp">
          {{ day3Obj.hiTemp }}
          <span class="degrees">o</span>
          <span class="fahrenheit">F</span>
        </div>
        <div class="humidity">
          <div>Humidity</div>
          <div><span>&nbsp;&nbsp;</span>{{ day3Obj.humidity }} %</div>
        </div>
        <div class="wind">
          <div>Wind</div>
          <div><span>&nbsp;&nbsp;&nbsp;</span>{{ day3Obj.wind }} mph</div>
        </div>
        <div class="wind-gust">
          <div>Gusts</div>
          <div><span>&nbsp;&nbsp;</span>{{ day3Obj.gust }} mph</div>
        </div>
      </div>
      <div id="day4">
        <h4>{{ day4Date }}</h4>
        <div class="icon-container">
          <img id="day4-img" :src=day4Icon />
        </div>
        <div class="temp">
          {{ day4Obj.hiTemp }}
          <span class="degrees">o</span>
          <span class="fahrenheit">F</span>
        </div>
        <div class="humidity">
          <div>Humidity</div>
          <div><span>&nbsp;&nbsp;</span>{{ day4Obj.humidity }} %</div>
        </div>
        <div class="wind">
          <div>Wind</div>
          <div><span>&nbsp;&nbsp;&nbsp;</span>{{ day4Obj.wind }} mph</div>
        </div>
        <div class="wind-gust">
          <div>Gusts</div>
          <div><span>&nbsp;&nbsp;</span>{{ day4Obj.gust }} mph</div>
        </div>
      </div>
      <div id="day5">
        <h4>{{ day5Date }}</h4>
        <div class="icon-container">
          <img id="day5-img" :src=day5Icon />
        </div>
        <div class="temp">
          {{ day5Obj.hiTemp }}
          <span class="degrees">o</span>
          <span class="fahrenheit">F</span>
        </div>
        <div class="humidity">
          <div>Humidity</div>
          <div><span>&nbsp;</span>{{ day5Obj.humidity }} %</div>
        </div>
        <div class="wind">
          <div>Wind</div>
          <div><span>&nbsp;&nbsp;&nbsp;</span>{{ day5Obj.wind }} mph</div>
        </div>
        <div class="wind-gust">
          <div>Gusts</div>
          <div><span>&nbsp;&nbsp;</span>{{ day5Obj.gust }} mph</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import dayjs from 'dayjs';
  import { storeToRefs } from 'pinia'
  import { useForecastStore } from '../stores/forecastAPI';
  import weatherIconsArr from '../data/weather-icons';
  
  const forecastStore = useForecastStore();

  const { fcDataSumArr } = storeToRefs( forecastStore ); 

  let day1Obj = ref({});
  let day2Obj = ref({});
  let day3Obj = ref({});
  let day4Obj = ref({});
  let day5Obj = ref({});
  let day1Date = ref('');
  let day2Date = ref('');
  let day3Date = ref('');
  let day4Date = ref('');
  let day5Date = ref('');
  let day1Icon = ref('');
  let day2Icon = ref('');
  let day3Icon = ref('');
  let day4Icon = ref('');
  let day5Icon = ref('');

  const getDates= () => {
    day1Date.value = dayjs().add(1, 'day').format('ddd D');
    day2Date.value = dayjs().add(2, 'days').format('ddd D');
    day3Date.value = dayjs().add(3, 'days').format('ddd D');
    day4Date.value = dayjs().add(4, 'days').format('ddd D');
    day5Date.value = dayjs().add(5, 'days').format('ddd D');
  };
  
  const getWeatherIcon = (iconVal) => {
    weatherIconsArr.value = weatherIconsArr;
    let icon_result = "";
    weatherIconsArr.value.forEach( item => {
      if (item.icon_id === iconVal) {
        icon_result = item.icon_img;
      };
    }); 
    return icon_result;
  };

  const buildDayObjs = () => {
    if (fcDataSumArr.value.length > 0 ) {
      day1Obj.value = fcDataSumArr.value[0];
      day2Obj.value = fcDataSumArr.value[1];
      day3Obj.value = fcDataSumArr.value[2];
      day4Obj.value = fcDataSumArr.value[3];
      day5Obj.value = fcDataSumArr.value[4];
      day1Icon.value = getWeatherIcon(fcDataSumArr.value[0].icon); 
      day2Icon.value = getWeatherIcon(fcDataSumArr.value[1].icon); 
      day3Icon.value = getWeatherIcon(fcDataSumArr.value[2].icon);
      day4Icon.value = getWeatherIcon(fcDataSumArr.value[3].icon);
      day5Icon.value = getWeatherIcon(fcDataSumArr.value[4].icon);
      getDates();
    };
  };


  watch( () => forecastStore, (newData) => {

    buildDayObjs();

  }, {deep:true});

</script>

<style scoped>
  .forecast-hdr {
    grid-column: 1/7;
    text-align: center;
    color: #fff;
    font-size: clamp(3.5vw, 4vw, 5vw);
    margin-bottom: .5em;;
  }
  #content {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-auto-rows: minmax(30px, auto);
    grid-gap: 5px;
    color: #FFF;
    background: black;
  }
  #day1 {
    grid-column: 1/3;
    background: skyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: clamp(2.25vw, 3vw, 3.5vw);
    padding: 5px; 
  }
  #day2 {
    grid-column: 3/5;
    background: tan;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: clamp(2.25vw, 3vw, 3.5vw);
    padding: 5px; 
  }
  #day3 {
    grid-column: 5/7;
    background: brown;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: clamp(2.25vw, 3vw, 3.5vw);
    padding: 5px; 
  }
  #day4 {
    grid-column: 7/9;
    background: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: clamp(2.25vw, 3vw, 3.5vw);
    padding: 5px; 
  }
  #day5 {
    grid-column: 9/11;
    background: teal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: clamp(2.25vw, 3vw, 3.5vw);
    padding: 5px; 
  }
  img {
    width: 50px;
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .temp {
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    /* font-size: clamp(2.75em, 4em, 5em); */
    /* font-size: 12vw; */
    font-size:clamp(3.5vw, 4vw, 5vw);
    padding: 1rem;
    color: #fff;
  }
  .degrees {
    position: sticky;
    padding-bottom: 1rem;
    font-size: 1.25vh;
    color: #fff;
  }
  .fahrenheit {
    position: sticky;
    font-size: 2.5vw;
    padding-left: .25rem;
    margin-left: 0;
    color: #fff;
  }
  .wind {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }
  .wind-gust {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    color:#fff;
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }
  .humidity {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    color:#fff;
    font-size: clamp(1.5vw, 2vw, 2.5vw);
  }

  @media screen and (min-width: 500px) and (max-width: 1023px)  {
    img {
      width: 80px;
    } 
  }
  
  @media screen and (min-width: 1024px) {
    #day1 {
      grid-column: 1/3;
      background: skyblue;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.75vw;
      padding-left: .5em; 
    }
    #day2 {
      grid-column: 3/5;
      background: tan;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.75vw;
      padding-left: .5em; 
    }
    #day3 {
      grid-column: 5/7;
      background: brown;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.75vw;
      padding-left: .5em; 
    }
    #day4 {
      grid-column: 7/9;
      background: grey;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.75vw;
      padding-left: .5em; 
    }
    #day5 {
      grid-column: 9/11;
      background: teal;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.75vw;
      padding-left: .5em; 
    }
    .temp {
      position: sticky;
      display: flex;
      align-items: center;
      justify-content: center;
      /* font-size: clamp(2.75em, 4em, 5em); */
      /* font-size: 12vw; */
      font-size: 1.9vw;
      /* padding: 1em; */
      color: #fff;
    }
    .degrees {
      position: sticky;
      padding-bottom: 1rem;
      font-size: 1vh;
      color: #fff;
    }
    .fahrenheit {
      position: sticky;
      font-size: 2vh;
      padding-left: .25rem;
      margin-left: 0;
      color: #fff;
    }
    .humidity {
      flex-flow: column;
      justify-content: center;
      font-size: 1vw;
      padding-bottom: 1em;
    }
    .wind {
      flex-flow: column;
      justify-content: center;
      font-size: 1vw;
      padding-bottom: 1em;
    }
    .wind-gust {
      flex-flow: column;
      justify-content: start;
      font-size: 1vw;
      padding-bottom: 1em;
    }
  }


</style>