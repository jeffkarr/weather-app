
import './assets/main.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Tooltip from 'primevue/tooltip';
import Vue3Resize from 'vue3-resize';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(Vue3Resize);
app.directive('tooltip', Tooltip);
app.mount('#app');
