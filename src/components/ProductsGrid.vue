<script setup>
import ProductGridItem from "./ProductGridItem.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
console.log(props.products.length);
</script>

<template>
  <div class="container">
    <div v-if="props.products.length === 1" class="row">
      <div
        class="oneColumn"
        v-for="product in props.products"
        :key="product.id"
      >
        <ProductGridItem :product="product" />
      </div>
    </div>
    <div v-else-if="props.products.length === 2" class="row">
      <div
        class="twoColumns"
        v-for="product in props.products"
        :key="product.id"
      >
        <ProductGridItem :product="product" />
      </div>
    </div>
    <div class="row" v-else>
      <div
        class="moreColumns"
        v-for="product in props.products"
        :key="product.id"
      >
        <ProductGridItem :product="product" />
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
.oneColumn {
  flex: 100%;
  max-width: 100%;
  padding: 0 5px;
}
.twoColumns {
  flex: 50%;
  max-width: 48%;
  padding: 0 5px;
}
.moreColumns {
  flex: 30%;
  max-width: 33%;
  padding: 0 5px;
}
@media screen and (max-width: 800px) {
  .row {
    margin-left: 10px;
    margin-right: 10px;
  }
  .moreColumns,
  .twoColumns {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
