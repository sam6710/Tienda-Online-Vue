<script setup>
import HeaderVue from "./components/header.vue"
import FooterVue from "./components/footer.vue"
// import MainVue from "./components/main.vue"
</script>

<template>
  <HeaderVue/>
  <router-view/>
  <FooterVue/>
</template>

<style scoped>
</style>
