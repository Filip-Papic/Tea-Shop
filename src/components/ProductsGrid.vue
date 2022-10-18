<script setup>
import ProductGridItem from "./ProductGridItem.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <ProductGridItem
          img="green-tea-product.jpg"
          title="Hunan Green Loose Leaf green"
        />
        <ProductGridItem
          img="green-tea-product2.jpg"
          title="Dragon Well Loose Leaf green"
        />
        <ProductGridItem
          img="yellow-tea-product.jpg"
          title="Huang Xiao yellow"
        />
      </div>
      <div class="column">
        <ProductGridItem
          img="black-tea-product.jpg"
          title="Decaf English Breakfast black"
        />
        <ProductGridItem
          img="oolong-tea-product.jpg"
          title="Milk Oolong Loose Leaf oolong"
        />
        <ProductGridItem
          img="herbal-tea-product.jpg"
          title="Butterfly Pea Flowers"
        />
      </div>
      <div class="column">
        <ProductGridItem
          img="white-tea-product.jpg"
          title="White Peony Loose Leaf"
        />
        <ProductGridItem
          img="fruit-tea-product.jpg"
          title="Rooibos Brekfast Loose Leaf fruit"
        />
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
