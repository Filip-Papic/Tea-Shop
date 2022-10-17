<script setup>
import ShopImgItem from "../components/ShopImgItem.vue";
</script>

<template>
  <main>
    <div class="banners">
      <div class="big">
        <ShopImgItem img="banner.jpg" title="MEN Y-3 KYUJO" />
      </div>
      <div class="medium">
        <div class="left">
          <ShopImgItem title="WOMEN SNEAKERS" img="banner2.jpg" />
        </div>
        <div class="right">
          <ShopImgItem title="MEN Y-3 KYUJO" img="banner3.jpg" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.big,
.medium {
  margin-bottom: 3.8rem;
}
.medium {
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 0 9rem;
}
.medium > .left {
  width: 50%;
  padding-right: 2rem;
}
.medium > .right {
  width: 50%;
  padding-left: 2rem;
}
.banners {
  padding: 0 2.8rem 2.8rem 2.8rem;
}
.banners > .medium > .left > .grid > .row > .overflow > a > img {
  width: 80%;
}
</style>
