<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="overflow">
    <a href="">
      <img :src="props.image" />
      <p class="text">{{ props.title }}</p>
    </a>
  </div>
</template>

<style scoped>
img {
  vertical-align: middle;
  width: 100%;
  transition: transform 0.8s ease;
  height: auto;
}

img:hover {
  transform: scale(1.1);
}
.overflow {
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
}

.overflow > a > .text {
  position: absolute;
  top: 25%;
  left: 25%;
  right: 25%;
  background-color: rgba(0, 0, 0, 0.738);
  color: #f2f2f2;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
  text-align: center;
  z-index: 1;
}
</style>
