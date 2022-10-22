import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  getters: {
    getCartTotal: (store) => {
      return store.cart.reduce((total, item) => {
        return (
          Math.round(
            (total + item.price * item.quantity + Number.EPSILON) * 100
          ) / 100
        );
      }, 0);
    },
    getCartTotalWithShipping: (store) => {
      return store.cart.reduce((total, item) => {
        return (
          Math.round(
            (total + item.price * item.quantity + 10 + Number.EPSILON) * 100
          ) / 100
        );
      }, 0);
    },
    getCartQuantity: (store) => {
      return store.cart.reduce((total, item) => {
        return total + parseInt(item.quantity);
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
    updateQuantity(id, quantity) {
      const item = this.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
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
    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
    },
    clearCart() {
      this.cart = [];
    },
  },
  persist: true,
});
