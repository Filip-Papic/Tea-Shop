import { defineStore } from "pinia";
import { articlesData } from "../data/articlesData";

export const useBlogStore = defineStore({
  id: "blog",
  state: () => ({
    articles: articlesData,
  }),
});
