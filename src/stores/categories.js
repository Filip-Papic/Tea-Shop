import { defineStore } from "pinia";
import { categoriesData } from "../data/categoriesData";

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
      this.categories = categoriesData;
    },
  },
});
