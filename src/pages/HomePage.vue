<template>
  <div id="content">
    <resize-observer @notify="handleResize" :showTrigger="true" />
    <Banner />
    <header>
      <LocationBar @locationCleared="(isCleared) => (citySelected = !isCleared)" />
    </header>
    <p id="simplemap">
      <a style="color:white;text-decoration:none;" href="https://simplemaps.com/data/us-cities" target="_blank">"United
        States Cities Database by simplemaps is licensed under CC BY 4.0</a>
    </p>
    <aside>
      <CurrentWeather />
    </aside>
    <p v-if="citySelected" id="vectorportal">
      <a style="color:white;text-decoration:none;" href=" https://www.vectorportal.com" target="_blank">Weather Image by
        Vectorportal.com</a>, <a style="color:white;text-decoration:none;"
        href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
    </p>
    <main>
      <div v-if="citySelected" id="map-container"> 
        <div v-if="showLink">
          <router-link to="/map">
            <img id="map-link" src="../assets/images/map/maptiler_screenshot.png" />
            <div id="map-overlay">
              <h4>Click to Open Map</h4>
            </div>
          </router-link>
        </div>
        <div v-else>
          <MapComponent />
        </div>
      </div>
    </main>
    <section>
      <Forecast />
    </section>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import LocationBar from '../components/LocationBar.vue'
  import CurrentWeather from '../components/CurrentWeather.vue';
  import Forecast from '../components/Forecast.vue';
  import Banner from '../components/Banner.vue';
  import MapComponent from '../components/MapComponent.vue';

  const citySelected = ref(false);

  const showLink = ref(true);

  let initScreenSize = window.innerWidth;

  if (initScreenSize > 1023) {
    showLink.value = false;
  } else {
    showLink.value = true;
  }

  const handleResize = ({ width, height }) => {
    if (width > 1023) {
      showLink.value = false;
    } else {
      showLink.value = true;
    }
  };

</script>

<style scoped>
  #content {
    display: grid;
    max-width: 2000px;
    max-height: 1400px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(20px, auto);
    grid-gap: 10px;
    grid-template-areas:
      'banner banner banner banner'    
      'header header header header'
      'simplemap simplemap simplemap simplemap'
      'aside aside aside aside'
      'aside aside aside aside'
      'vectorportal vectorportal vectorportal vectorportal'
      'main main main main'
      'main main main main'
      'section section section section'
      'section section section section'
      'section section section section';
  }
  banner {
    grid-area: banner;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh 0 0 0;
  }
  header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh 0 0 0;
  }
  #simplemap {
    grid-area: simplemap;
    display: flex;
    justify-content: center;
    font-size: .7em;
  }
  aside {
    grid-area: aside;
    margin: 0;
  }
  #vectorportal {
    grid-area: vectorportal;
    display: flex;
    justify-content: center;
    font-size: .7em;
    line-height: 10px;
    color: #fff;
  }
  #vectorportal-attr a {
    color: #fff;
    height: auto;
  }
  main {
    grid-area: main;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #map-container {
    position:relative;
    width: 100%;
    height: 100%;
  }
  #map-link {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 3px solid white;
    border-radius: 6px;
  }
  section {
    grid-area: section;
    margin: 0;
  }
  #map-overlay {
    position: absolute;
    top: 40%;
    left: 5%;
    background: rgb(122, 189, 255); /* Fallback color */
    background: rgba(122, 189, 255, 0.75); /* Black background with 0.5 opacity */
    color: #f1f1f1;
    font-size: 4vw;
    width: 90%;
    padding: 20px;
    text-align: center;
    border-radius: 6px;
  }

  @media screen and (min-width: 600px) {
    #map-overlay {
      position: absolute;
      top: 50%;
      left: 5%;
      background: rgb(122, 189, 255); /* Fallback color */
      background: rgba(122, 189, 255, 0.75); 
      color: #f1f1f1;
      font-size: 4vw;
      width: 90%;
      padding: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    #content {
      display: grid;
      max-width: 1800px;
      margin: 0 auto;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(20px, auto);
      grid-gap: 10px;
      grid-template-areas:
        '. banner banner banner'    
        '. header header header'
        '. simplemap simplemap .'
        'aside main main main'
        'aside main main main'
        'vectorportal main main main'
        'section main main main'
        'section main main main'
        'section main main main';
      padding: 10px;
    }
    main {
      grid-area: main;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1vw;
    }
    banner {
      grid-area: banner;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2vh 0 0 0;
    }
    header {
      grid-area: header;
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 2vh 0 0 1vw;
    }
  }
</style>