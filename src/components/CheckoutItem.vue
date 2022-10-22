<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cart";

const props = defineProps({
  checkout: {
    type: Boolean,
    required: true,
  },
});

const router = useRouter();

const cart = useCartStore();

const checkout = () => {
  router.push({ name: "checkout" });
};
</script>

<template>
  <div class="checkout">
    <div class="checkout-container">
      <h1>
        Summary
        <hr />
      </h1>
      <h3>
        Subtotal:
        <h3>${{ cart.getCartTotal }}</h3>
      </h3>
      <h3>
        Shipping:
        <h3 v-if="cart.getCartTotal > 100">Free</h3>
        <h3 v-else>$10</h3>
      </h3>
      <h3>
        Order total:
        <h3 v-if="cart.getCartTotal > 100">${{ cart.getCartTotal }}</h3>
        <h3 v-else>${{ cart.getCartTotalWithShipping }}</h3>
      </h3>
      <h1><hr /></h1>
      <button v-if="props.checkout" @click="checkout()">Go to checkout</button>
      <button v-else @click="router.push({ name: 'cart' })">
        Back to cart
      </button>
    </div>
  </div>
</template>

<style scoped>
.checkout {
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #f2f2f2;
  border: 1px solid #000;
  margin-top: 1.4%;
  max-height: 31.5rem;
  max-width: 26.1rem;
}
.checkout-container {
  padding-left: 8%;
}
.checkout-container > h1 {
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  width: 90%;
}
.checkout-container > h1 > hr {
  border: 1px solid #000;
}
.checkout-container > h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 400;
}
.checkout-container > button {
  background-color: #fff;
  border: 2px solid #000;
  color: #000;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  width: 90%;
  cursor: pointer;
  margin-bottom: 8%;
}
.checkout-container > button:hover {
  background-color: #000;
  color: #fff;
}
@media screen and (max-width: 768px) {
  .checkout {
    width: 100%;
  }
}
</style>
