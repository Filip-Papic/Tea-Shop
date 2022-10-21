<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <div class="overflow">
      <img :src="props.image" :alt="props.title" loading="lazy" />
    </div>
    <div class="container">
      <h4>
        <b>{{ props.title }}</b>
      </h4>
      <p>{{ props.content.substring(0, 300) }}...</p>
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
  font-family: "Roboto", sans-serif;
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
