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
      <p>
        Long Jing tea (龙井茶), also known by its literal translation, “Dragon
        Well”, is a variety of pan-fried green tea from Hangzhou, China’s
        Zhejiang Province. It can be argued that Long Jing is the most
        prestigious Chinese green tea; in the Qing Dynasty, Long Jing was given
        the status of “Imperial Tea”.
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  margin-right: 11.7%;
  margin-left: 11.7%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 0px 16px 16px 16px;
}
h4 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
p {
  font-family: "Montserrat";
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
img:hover {
  filter: brightness(50%);
}
.overflow {
  width: 100%;
  height: 100%;
  max-width: 30%;
  min-width: 30%;
  overflow: hidden;
}
@media screen and (max-width: 800px) {
  .card {
    margin-right: 5%;
    margin-left: 5%;
    flex-direction: column;
  }
  img {
    width: 100%;
  }
  .overflow {
    min-width: 100%;
  }
}
</style>
