<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import CheckoutItem from "../components/CheckoutItem.vue";
import { useCartStore } from "../stores/cart";

const router = useRouter();

const cart = useCartStore();

const details = reactive({
  name: "",
  email: "",
  address: "",
  city: "",
  country: "",
  zip: "",
  phone: "",
});
const paymentType = ref("");
const disabled = ref(true);

const ordered = ref(false);
const submitOrder = () => {
  ordered.value = true;
  details.name = "";
  details.email = "";
  details.address = "";
  details.city = "";
  details.country = "";
  details.zip = "";
  details.phone = "";
  paymentType.value = "";
  disabled.value = true;
  cart.clearCart();
  window.scrollTo(0, 0);
};
</script>

<template>
  <div>
    <div v-if="ordered" class="order-success">
      <h1>We've received your order (Order ID {{ Date.now() }})</h1>
      <h3>Thank you for your purchase!</h3>
      <h3>We'll send you an email with your order details.</h3>
      <button @click="router.push({ name: 'home' })">Back to shopping?</button>
    </div>
    <div class="row">
      <div class="checkout-view">
        <form class="order-details" @submit.prevent="submitOrder()">
          <h1>Order Details</h1>
          <hr />
          <br />
          <div class="form-group">
            <h3 for="name">Name *</h3>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              v-model="details.name"
            />
          </div>
          <div class="form-group">
            <h3 for="email">Email *</h3>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              v-model="details.email"
            />
          </div>
          <div class="form-group">
            <h3 for="address">Address *</h3>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              required
              v-model="details.address"
            />
          </div>
          <div class="form-group">
            <h3 for="city">City *</h3>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              required
              v-model="details.city"
            />
          </div>
          <div class="form-group">
            <h3 for="state">Country *</h3>
            <input
              type="text"
              id="country"
              placeholder="Enter your country"
              required
              v-model="details.country"
            />
          </div>
          <div class="form-group">
            <h3 for="zip">Zip *</h3>
            <input
              type="text"
              id="zip"
              placeholder="Enter your zip"
              required
              v-model="details.zip"
            />
          </div>
          <div class="form-group">
            <h3 for="text">Phone Number *</h3>
            <input
              type="text"
              id="Phone Number"
              placeholder="Enter your phone number"
              required
              v-model="details.phone"
            />
          </div>
          <div class="form-group">
            <div class="payment">
              <h3>Payment Method</h3>
              <br />
              <div class="credit-card">
                <input
                  type="radio"
                  id="paymentMethod"
                  name="paymentMethod"
                  value="creditCard"
                  v-model="paymentType"
                  @change="(paymentType = 'creditCard'), (disabled = false)"
                />
                <label for="paymentMethod">
                  <img
                    width="48"
                    height="32"
                    src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png"
                    alt="mastercard"
                  />
                  <img
                    width="38"
                    height="32"
                    src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                    alt="visa"
                  />
                  <h3>Credit Card</h3></label
                >
              </div>
              <br />
              <div class="paypal">
                <input
                  type="radio"
                  id="paymentMethod2"
                  name="paymentMethod2"
                  value="paypal"
                  v-model="paymentType"
                  @change="(paymentType = 'paypal'), (disabled = false)"
                />
                <label for="paymentMethod2"
                  ><img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                    alt="paypal"
                  />
                  <h3>PayPal- !!!add payment procesors!!!</h3></label
                >
              </div>
              <br />
            </div>
          </div>
          <button :disabled="disabled" type="submit">Place Order</button>
          <p v-if="disabled" class="hint">
            <i>Choose payment method first</i>
          </p>
        </form>
      </div>
      <CheckoutItem :checkout="false" />
    </div>
  </div>
</template>

<style scoped>
.row {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  margin-left: 11.7%;
  margin-right: 11.7%;
  gap: 3rem;
}
.checkout-view {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.order-details {
  width: 100%;
}
.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}
.form-group h3 {
  font-size: large;
  margin: 0;
  padding: 0.5rem;
}
.form-group input {
  height: 2rem;
}
.form-group input[type="text"] {
  border: 1px solid #000000;
  padding: 0.5rem;
  font-size: large;
}
hr {
  border: 1px solid #000000;
  margin: 0;
  padding: 0;
}
.payment {
  display: flex;
  flex-direction: column;
}
.credit-card {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.paypal {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.credit-card input,
.paypal input {
  margin-right: 1rem;
}
.credit-card img,
.paypal img {
  margin-right: 1rem;
}
.credit-card label,
.paypal label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  font-size: large;
  width: 100%;
  height: 3rem;
  cursor: pointer;
}
button:disabled {
  background-color: rgba(0, 0, 0, 0.667);
  color: #fff;
}
button:disabled:hover {
  background-color: rgba(0, 0, 0, 0.667);
  color: #fff;
}
button:hover {
  background-color: #fff;
  color: #000;
}
.hint {
  font-size: small;
  color: #ff0000;
}
.order-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  font-family: "Roboto", sans-serif;
  height: 100%;
  width: 100%;
  border: 1px solid #000000;
  padding: 2%;
  margin-bottom: 2%;
}
.order-success h1 {
  font-size: 2rem;
}
.order-success h3 {
  font-size: 1rem;
  margin-top: 0.1rem;
}
.order-success button {
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  font-size: large;
  width: 15%;
  height: 3rem;
  cursor: pointer;
  margin-top: 1%;
}
.order-success button:hover {
  background-color: #fff;
  color: #000;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
  }
  .order-success {
    width: 80%;
    padding: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .order-success button {
    width: 50%;
    font-size: medium;
    padding: 0.3rem;
  }
  .order-success h1 {
    font-size: 1.5rem;
  }
}
</style>
