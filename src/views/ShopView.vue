<script setup>
import ProductsGrid from "../components/ProductsGrid.vue";
import { useProductsStore } from "../stores/products";

const productStore = useProductsStore();
productStore.fetchProducts();
</script>

<template>
  <div>
    <ProductsGrid :products="productStore.products" />
  </div>
</template>

<style scoped></style>
