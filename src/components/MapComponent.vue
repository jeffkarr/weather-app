<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer">
      <div class="mapBtns">
        <Button id="radarBtn" size="small" @click="changeWeatherLayer('radar')"><small>Radar</small></Button>
        <Button id="tempBtn" size="small" @click="changeWeatherLayer('temperature')"><small>Temperature</small></Button>
        <Button id="windBtn" size="small" @click="changeWeatherLayer('wind')"><small>Wind</small></Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import { TemperatureLayer, RadarLayer, WindLayer, ColorRamp } from '@maptiler/weather';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { useWeatherStore } from '../stores/weatherAPI';

const weatherStore = useWeatherStore();
const { locationData, lat, lon } = storeToRefs(weatherStore);

const mapContainer = shallowRef(null);
const map = shallowRef(null);

config.apiKey = `${import.meta.env.VITE_MAPTILER_APIKEY}`;

const initialState = { lng: -94.9053581, lat: 39.0919879, zoom: 4 };

let weatherLayers = ref({});
weatherLayers.value = {
  "radar": {
    "layer": null,
    "value": "value",
    "units": " dBZ"
  },
  "temperature": {
    "layer": null,
    "value": "value",
    "units": "°"
  },
  "wind": {
    "layer": null,
    "value": "speedMetersPerSecond",
    "units": " m/s"
  }
};
let activeLayer = ref('');
let activeWeatherLayer = ref(null);
let weatherLayer = ref(null);
let lngLatArr = ref([]);
let mapCityState = ref('');
let mapType = ref('');

if (lon.value && lat.value) {
  initialState.lng = lon.value;
  initialState.lat = lat.value;
  lngLatArr.value[0] = lon.value;
  lngLatArr.value[1] = lat.value;
};

const createWeatherLayer = (type) => {
  weatherLayer = null;
  switch (type) {
    case 'radar':
      weatherLayer = new RadarLayer({
        opacity: 0.8,
        id: 'radar'
      });
      break;
    case 'temperature':
      weatherLayer = new TemperatureLayer({
        colorramp: ColorRamp.builtin.TEMPERATURE_3,
        id: 'temperature'
      });
      break;
    case 'wind':
      weatherLayer = new WindLayer({ id: 'wind' });
      break;
  };
  mapType.value = type;
  weatherLayers.value[type].layer = weatherLayer;
  return weatherLayer.value;
};

const changeWeatherLayer = (type) => {
  mapType.value = type;
  if (type !== activeLayer.value) {
    if (map.value.getLayer(activeLayer.value)) {
      activeWeatherLayer.value = weatherLayers.value[activeLayer.value]?.layer;
      // setting the visibility of the current active layer to none.
      if (activeWeatherLayer.value) {
        map.value.setLayoutProperty(activeLayer.value, 'visibility', 'none');
      }
    }
    // assigning the active layer.
    activeLayer.value = type;
    // assigning the activeLayer to the weatherLayer.
    weatherLayer.value = weatherLayers.value[activeLayer.value].layer || createWeatherLayer(activeLayer.value);

    if (map.value.getLayer(activeLayer.value)) {
      map.value.setLayoutProperty(activeLayer.value, 'visibility', 'visible');
    } else {
      map.value.addLayer(weatherLayer, 'Water');
    }
    return weatherLayer.value;
  };
};

const addMarker = () => {
  if (lon.value && lat.value && lngLatArr.length === 0) {
    lngLatArr.value.push(lon.value);
    lngLatArr.value.push(lat.value);
  } else {
    lngLatArr.value.splice(0, 1, initialState.lng);
    lngLatArr.value.splice(1, 1, initialState.lat);
  };

  if (locationData.value && locationData.value.city) {
    mapCityState.value = locationData.value.city;
  };

  new Marker({ color: "#FF0000" })
    .setLngLat(lngLatArr.value)
    .addTo(map.value);

};

const initWeatherMap = (type) => {
  weatherLayer.value = changeWeatherLayer(type);
  addMarker();
};

onBeforeUpdate(() => {
  mapCityState.value = locationData.value.city;
})

onMounted(() => {

  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: MapStyle.BASIC,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom,
    geolocateControl: false,
    scaleControl: false,
    navigationControl: "top-left"
  }));

  setTimeout(() => {
    map.value.setPaintProperty('Water', 'fill-color', "rgba(0, 0, 0, 0.6)");
    initWeatherMap('radar');
  }, 1000);

}),

  onUnmounted(() => {
    map.value?.remove();

  });

</script>

<style scoped>
.map-wrap {
  grid-column: 3/5;
}
.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
.p-button {
  color: white;
  background-color: rgb(122, 189, 255);
  text-decoration: none;
}
.mapBtns {
  position: relative;
  column-width: 87px;
  column-count: 1;
  top: 120px;
  left: 10px;
  z-index: 1;
}

#radarBtn {
  z-index: 1;
  display: block;
  color: black;
  background-color: white;
  margin-bottom: 10px;
}

#tempBtn {
  z-index: 1;
  display: block;
  color: black;
  background-color: white;
  margin-bottom: 10px;
}

#windBtn {
  z-index: 1;
  display: block;
  color: black;
  background-color: white;
}
</style>