<script setup>
import BannerItem from "../components/BannerItem.vue";
import CategoriesGrid from "../components/CategoriesGrid.vue";
</script>

<template>
  <main>
    <div class="banners">
      <div class="big">
        <BannerItem image="/images/banner.png" title="Live Naturally" />
      </div>
    </div>
    <blockquote class="blockquote">
      <p class="quotemark">“</p>
      <p>“A cup of tea solves everything.”</p>
    </blockquote>
    <br />
    <CategoriesGrid />
  </main>
</template>

<style scoped>
.blockquote {
  padding: 60px 80px 40px;
  position: relative;
}
.blockquote p {
  font-family: "Utopia-italic";
  font-size: 35px;
  font-weight: 700px;
  text-align: center;
}
.blockquote .quotemark {
  font-size: 300px;
  font-weight: 700px;
  position: absolute;
  top: -20rem;
  left: 25rem;
  color: rgba(0, 0, 0, 0.1);
}
.blockquote::after {
  content: "";
  top: 20px;
  left: 40%;
  margin-left: -100px;
  position: absolute;
  border-bottom: 3px solid #bf0024;
  height: 3px;
  width: 33%;
}
@media screen and (max-width: 800px) {
  .blockquote .quotemark {
    top: -90%;
    left: 0;
  }
  .blockquote.blockquote::after {
    width: 87%;
  }
}
</style>
