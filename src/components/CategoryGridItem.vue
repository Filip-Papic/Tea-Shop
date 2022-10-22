<script setup>
const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="{
      name: 'category',
      params: { id: props.category.id, name: props.category.name },
    }"
    aria-label="category"
  >
    <div class="overflow">
      <img
        :src="$image(props.category.image)"
        :alt="props.category.name"
        loading="lazy"
      />
      <p class="text">{{ props.category.name }}</p>
    </div>
  </RouterLink>
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
a {
  cursor: pointer;
}
.overflow > .text {
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
