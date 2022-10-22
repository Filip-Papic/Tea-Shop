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
  <div class="grid">
    <div class="row">
      <div class="overflow">
        <a href="/">
          <img alt="Banner" :src="props.image" />
          <div class="text">
            <p>{{ props.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid > .row {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}
img {
  transition: transform 0.8s ease;
  max-height: 33vw;
  max-width: 76vw;
  width: auto;
  height: auto;
}
img:hover {
  transform: scale(1.1);
}
.overflow {
  overflow: hidden;
}
.text {
  font-family: "Roboto", sans-serif;
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
  font-weight: 300;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 768px) {
  img {
    max-height: 100vw;
    max-width: 100vw;
  }
  .text {
    width: 50%;
    font-size: 1rem;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
