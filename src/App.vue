<template>
  <Navbar />
  <router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue';
// import Navbar from '@/components/Navbar.vue';
export default {
  name: 'App',
  components: {
    // Navbar
    // Cargando con lazy loading el componente navbar
    Navbar: defineAsyncComponent(() => import(/*webpackChunkName: "Navbar" */ '@/components/Navbar.vue'))
  }
}
</script>

<style>

</style>
