<script setup>
import CartItem from "../components/CartItem.vue";
import CheckoutItem from "../components/CheckoutItem.vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();

const inputQuantity = (e) => {
  cart.updateQuantity(e.id, e.quantity);
};
</script>

<template>
  <p v-if="cart.cart.length === 0">Your cart is empty</p>
  <div v-else class="row">
    <div class="cart">
      <div v-for="item in cart.cart" :key="item.id">
        <CartItem
          :product="item"
          @remove="cart.removeFromCart($event)"
          @increment="cart.increaseQuantity($event)"
          @decrement="cart.decreaseQuantity($event)"
          @input-quantity="inputQuantity($event)"
        />
      </div>
    </div>
    <CheckoutItem :checkout="true" />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-left: 11.7%;
  margin-right: 11.7%;
  margin-bottom: 10%;
  gap: 3rem;
}
.cart {
  display: flex;
  flex-direction: column;
  width: 100%;
}
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
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
    gap: 0;
  }
  .cart {
    width: 100%;
  }
}
</style>
