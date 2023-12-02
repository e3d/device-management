<script setup>
import DeviceManagement from './components/composables/DeviceManagement.vue'
</script>

<template>  
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <DeviceManagement />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
