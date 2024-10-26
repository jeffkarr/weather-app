
<template>
      <Select 
        class="loc-select" 
        v-model="selectedCity" 
        editable showClear filter 
        :options="cities" 
        optionLabel="name" 
        placeholder="Select a City" 
        />

</template>

<script setup>
  import { ref } from "vue";
  
  import Select from 'primevue/select';

  const selectedCity = ref();
  const cities = ref([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ]);

</script>

<style scoped>

  .loc-select {
    width: 90vw;
    height: 3rem;
  }
  @media screen and (min-width: 1275px) {
    .loc-select {
      width: 50vw;
      height: 3rem;
    }
  }

</style>
