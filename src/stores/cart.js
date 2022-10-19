import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  getters: {
    getCartTotal: (store) => {
      return store.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    getCartQuantity: (store) => {
      return store.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
  },
  actions: {
    addToCart(product, quantity) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity += quantity;
      } else {
        this.cart.push({
          ...product,
          quantity,
        });
      }
    },
    removeFromCart(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.cart = this.cart.filter((item) => item.id !== product.id);
        }
      }
    },
    increaseQuantity(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.cart = this.cart.filter((item) => item.id !== product.id);
        }
      }
    },
  },
  persist: true,
});
