import { defineStore } from "pinia";
import { categories } from "../data/categories";

export const useCategoriesStore = defineStore({
  id: "categories",
  state: () => ({
    categories: [],
  }),
  getters: {
    getCategoryById: (id) => {
      return this.categories.find((category) => category.id === id);
    },
  },
  actions: {
    fetchCategories() {
      this.categories = categories;
    },
  },
});
