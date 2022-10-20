<script setup>
import CartItem from "../components/CartItem.vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();

const inputQuantity = (e) => {
  console.log(e);
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
          <h3 v-else>${{ cart.getCartTotal + 10 }}</h3>
        </h3>
        <h1><hr /></h1>
        <button>Checkout</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-left: 11.7%;
  margin-right: 11.7%;
  gap: 3rem;
}
.cart {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.checkout {
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #f2f2f2;
  border: 1px solid #000;
  margin-top: 1.4%;
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
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
    min-width: 100%;
    gap: 0;
  }
  .cart {
    width: 100%;
  }
  .checkout {
    width: 100%;
  }
  p {
    margin-bottom: 0;
    margin-top: 0;
  }
}
</style>
