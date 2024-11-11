<template>
  <div id="content">
    <header>
        <LocationBar @locationCleared="(isCleared) => (hideVectorPortal = isCleared)" />
    </header>
    <p id="simplemap">
      <a style="color:white;text-decoration:none;"href="https://simplemaps.com/data/us-cities" target="_blank">"United States Cities Database by simplemaps is licensed under CC BY 4.0</a>
    </p>
    <aside>
      <CurrentWeather />
    </aside>
    <p v-if="!hideVectorPortal" id="vectorportal">
      <a style="color:white;text-decoration:none;" href=" https://www.vectorportal.com" target="_blank">Weather Image by Vectorportal.com</a>,  <a style="color:white;text-decoration:none;" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
    </p>
    <main>
      Weather Map
    </main>
    <section>
      <Forecast />
    </section>
  </div>
</template>

<script setup>
  // import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue';
  import LocationBar from './components/LocationBar.vue'
  import CurrentWeather from './components/CurrentWeather.vue';
  import Forecast from './components/Forecast.vue';

  const hideVectorPortal = ref(false);
</script>

<style scoped>

  #content {
    display: grid;
    max-width: 2000px;
    max-height: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(30px, auto);
    grid-gap: 10px;
    grid-template-areas:
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
  header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: #fff;
    padding: 30px;   */
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
    /* background: #fff;
    padding: 30px;   */
  }
  #vectorportal {
    grid-area: vectorportal;
    display: flex;
    justify-content: center;
    font-size: .7em;
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
    background: #fff;
    padding: 30px;  
  }
  section {
    grid-area: section;
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    #content {
      display: grid;
      max-width: 1800px;
      margin: 0 auto;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(50px, auto);
      grid-gap: 10px;
      grid-template-areas:
      'header header header header'
      '. simplemap simplemap .'
      'aside main main main'
      'aside main main main'
      'vectorportal main main main'
      'section main main main'
      'section main main main'
      'section main main main';
    }
    main {
      grid-area: main;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      padding: 20px;  
    }
  }

</style>
