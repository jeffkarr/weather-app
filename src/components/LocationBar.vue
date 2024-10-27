<template>
    <Select 
      class="loc-select" 
      v-model="selectedItem" 
      showClear filter
      :options="citiesStore.items" 
      optionLabel="city"
      placeholder="Select a City" 
      :virtualScrollerOptions="{ itemSize: 16 }"
      resetFilterOnHide="true"
    />
</template>

<script setup>
  import { ref } from "vue";
  import Select from 'primevue/select';
  import { useCitiesStore } from '../stores/cities';

  const selectedItem = ref();

  const citiesStore = useCitiesStore();

  citiesStore.getCities();


</script>

<style scoped>

  .loc-select {
    width: 90vw;
    height: 3rem;
  }

  .p-select {
    text-align: center
  }

  @media screen and (min-width: 1275px) {
    .loc-select {
      width: 50vw;
      height: 3rem;
    }
  }

</style>
