<script setup>
import { watch } from "vue";
import ProductsGrid from "../components/ProductsGrid.vue";
import { useProductsStore } from "../stores/products";
import { useRouter } from "vue-router";

const route = useRouter();

const productStore = useProductsStore();
productStore.searchProducts(route.currentRoute.value.query.q);

watch(
  () => route.currentRoute.value.query.q,
  (newQuery) => {
    if (newQuery !== undefined) {
      productStore.searchProducts(newQuery);
    }
  }
);
</script>

<template>
  <div>
    <ProductsGrid
      v-if="productStore.products.length > 0"
      :products="productStore.products"
    />
    <div v-else>
      <p>No products found</p>
    </div>
  </div>
</template>

<style scoped>
p {
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30.3rem;
  margin-top: 2rem;
  margin-right: 11.7%;
  margin-left: 11.7%;
}
</style>
