<script setup>
import { useRoute } from "vue-router";
import ProductsGrid from "../components/ProductsGrid.vue";
import { useProductsStore } from "../stores/products";

const route = useRoute();

const products = useProductsStore();
products.fetchProductsByCategory(route.params.id);
</script>

<template>
  <div>
    <ProductsGrid :products="products.products" />
  </div>
</template>

<style scoped></style>
