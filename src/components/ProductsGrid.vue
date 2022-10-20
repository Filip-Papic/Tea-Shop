<script setup>
import ProductGridItem from "./ProductGridItem.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <div class="row" v-if="products.length > 1">
      <div class="column" v-for="product in props.products" :key="product.id">
        <ProductGridItem :product="product" />
      </div>
    </div>
    <div v-else class="row">
      <div class="oneColumn">
        <ProductGridItem :product="props.products[0]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: -2rem;
  animation: 1s fadeIn;
  animation-fill-mode: forwards;
  visibility: hidden;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}
.row {
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  margin-left: 11.4rem;
  margin-right: 11.4rem;
  grid-gap: 1rem;
}

.column {
  flex: 30%;
  max-width: 33%;
  padding: 0 5px;
}

.oneColumn {
  flex: 100%;
  max-width: 100%;
  padding: 0 5px;
}

@media screen and (max-width: 800px) {
  .row {
    margin-left: 10px;
    margin-right: 10px;
  }
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
