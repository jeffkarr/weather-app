import { defineStore } from 'pinia';
import { ref } from 'vue';
import citiesArr from '../data/cities.json';

export const useCitiesStore = defineStore('items', () => {

  let items = ref([]);

  const getCities = async () => {
    items.value = await citiesArr;
  };

  return { items, getCities };
});
