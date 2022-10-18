import { defineStore } from "pinia";
import { products } from "../data/products";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
  }),
  getters: {
    getProductById: (id) => {
      return this.products.find((product) => product.id === id);
    },
  },
  actions: {
    fetchProducts() {
      this.products = products;
    },
  },
});
