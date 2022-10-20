<script setup>
import HeaderItem from "./components/HeaderItem.vue";
import FooterItem from "./components/FooterItem.vue";
</script>
<template>
  <div class="app">
    <HeaderItem />
    <RouterView />
    <FooterItem />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
}
</style>
