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
  <div class="grid">
    <div class="row">
      <div class="overflow">
        <a href="/">
          <img alt="Banner" :src="imgSrc" />
          <div class="text">
            <p>{{ props.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  position: relative;
}
.grid > .row {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}
.grid > .row > overflow > a {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
}
img {
  transition: transform 0.8s ease;
  height: 33vw;
  width: 76vw;
}
img:hover {
  transform: scale(1.1);
}
.overflow {
  overflow: hidden;
}
.text {
  position: absolute;
  bottom: 0;
  width: 15%;
  height: auto;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 100;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .grid > .row {
    width: 100%;
  }
  .text {
    width: 50%;
    font-size: 0.7rem;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
