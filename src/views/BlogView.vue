<script setup>
import BlogArticleItem from "../components/BlogArticleItem.vue";
</script>

<template>
  <div>
    <BlogArticleItem
      title="Dragon Well: Tea Of The Month"
      img="green-tea-cat.jpg"
    />
    <BlogArticleItem
      title="Butterfly Pea: Tea Of The Month"
      img="fruit-tea-cat.jpg"
    />
    <BlogArticleItem
      title="Learn About Tea: Blending"
      img="black-tea-cat.jpg"
    />
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
