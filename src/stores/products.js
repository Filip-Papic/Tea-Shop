import { defineStore } from "pinia";
import { productsData } from "../data/productsData";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
    product: {},
  }),
  getters: {},
  actions: {
    fetchProducts() {
      this.products = productsData;
    },
    fetchProductsByCategory(categoryId) {
      this.products = productsData.filter(
        (product) => product.category === parseInt(categoryId)
      );
    },
    fetchProduct(id) {
      this.product = productsData.find((p) => p.id == id);
    },
    searchProducts(search) {
      this.products = productsData.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
});
