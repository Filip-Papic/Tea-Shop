<script setup>
import router from "../router";
import { useCartStore } from "../stores/cart";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const singleProduct = () => {
  router.push({
    name: "product",
    params: { id: props.product.id, name: props.product.name },
  });
};

const cartStore = useCartStore();
const addToCart = () => {
  cartStore.addToCart(props.product, 1);
};
</script>

<template>
  <div class="card" @click="singleProduct()">
    <div class="overflow">
      <img :src="props.product.image" loading="lazy" />
    </div>
    <div class="container">
      <h4>
        <b>{{ props.product.name }}</b>
      </h4>
      <p class="price">${{ props.product.price }}</p>
      <button class="button" @click.stop="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 0px 16px 16px 16px;
}
.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.button:hover {
  background-color: #555;
}
h4 {
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
.price {
  color: grey;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
}
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

.overflow > a > .text {
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
