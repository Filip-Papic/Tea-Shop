<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";
import ImageModal from "../components/ImageModal.vue";

const modals = reactive({
  image: "none",
});

const route = useRoute();
const id = route.params.id;

const quantity = ref(1);
const cartStore = useCartStore();
const addToCart = () => {
  cartStore.addToCart(product, quantity.value);
};

const products = useProductsStore();
products.fetchProduct(id);
const product = products.product;
</script>

<template>
  <div class="product">
    <div class="row">
      <div class="column">
        <div class="product-image" @click="modals.image = 'block'">
          <img :src="product.image" :alt="product.name" />
        </div>
      </div>
      <div class="column">
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <p>
            {{ product.description }}
          </p>
          <div class="product-price">
            <p>${{ product.price }}</p>
          </div>
          <div class="product-quantity">
            <p>Quantity</p>
            <input type="number" min="1" max="10" v-model="quantity" />
          </div>
          <div class="product-add" @click="addToCart">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <ImageModal v-model="modals.image" :product="product" />
  </div>
</template>

<style scoped>
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 11.5rem;
  margin-left: 11.5rem;
  margin-top: 2rem;
}
.product > .row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.product > .row > .column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
}
.product > .row > .column > .product-image {
  display: flex;
  width: 90%;
  border: 1px solid #00000032;
  cursor: pointer;
}
.product > .row > .column > .product-image > img {
  width: 100%;
  height: 100%;
}
.product > .row > .column > .product-info {
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.product > .row > .column > .product-info > h1 {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  padding: 5%;
}
.product > .row > .column > .product-info > p {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 5%;
}
.product > .row > .column > .product-info > .product-price {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5%;
}
.product > .row > .column > .product-info > .product-price > p {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
.product > .row > .column > .product-info > .product-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.product > .row > .column > .product-info > .product-quantity > p {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  padding-bottom: 1%;
}
.product > .row > .column > .product-info > .product-quantity > input {
  width: 50%;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.product > .row > .column > .product-info > .product-add {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  padding-top: 3%;
}
.product > .row > .column > .product-info > .product-add > button {
  width: 100%;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
}
.product > .row > .column > .product-info > .product-add > button:hover {
  background-color: rgba(0, 0, 0, 0.508);
}
@media (max-width: 768px) {
  .product {
    margin-right: 5%;
    margin-left: 5%;
  }
  .product > .row {
    flex-direction: column;
  }
  .product > .row > .column {
    width: 100%;
  }
  .product > .row > .column > .product-info > .product-add > button {
    width: 10rem;
    height: 4rem;
  }
}
</style>
