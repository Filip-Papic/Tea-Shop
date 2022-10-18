<script setup>
import { computed } from "vue";
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
const imgSrc = computed(() => {
  return new URL(`../assets/${props.img}`, import.meta.url);
});
</script>

<template>
  <div class="card">
    <div class="overflow">
      <img :src="imgSrc" loading="lazy" />
    </div>
    <div class="container">
      <h4>
        <b>{{ title }}</b>
      </h4>
      <p>some description...</p>
      <button class="button">Add to cart</button>
    </div>
  </div>
</template>

<style scoped></style>
