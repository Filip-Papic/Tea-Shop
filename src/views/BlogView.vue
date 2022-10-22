<script setup>
import BlogArticleItem from "../components/BlogArticleItem.vue";
import { useBlogStore } from "../stores/blog";

const blog = useBlogStore();
</script>

<template>
  <div>
    <br />
    <div v-for="article in blog.articles" :key="article.id">
      <BlogArticleItem
        :title="article.title"
        :content="article.content"
        :image="article.image"
      />
    </div>
    <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
.pagination a.active {
  background-color: #4caf50;
  color: white;
}
.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>
