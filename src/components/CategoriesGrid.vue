<script setup>
import CategoryGridItem from "./CategoryGridItem.vue";
import { useCategoriesStore } from "../stores/categories";

const categories = useCategoriesStore();
categories.fetchCategories();
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column" v-for="cat in categories.categories" :key="cat.id">
        <CategoryGridItem :category="cat" />
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
