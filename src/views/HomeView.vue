<script setup></script>

<template>
  <main>
    <div class="grid">
      <div class="row">
        <div class="overflow">
          <a href="">
            <img alt="Banner" src="../assets/banner.jpg" />
            <div class="text">
              <p>MEN Y-3 KYUJO</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main > .grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  height: 100%;
  width: 100%;
}
main > .grid > .row {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
}
main > .grid > .row > overflow > a {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
}
img {
  transition: transform 0.8s ease;
  height: auto;
  width: 100%;
}
img:hover {
  transform: scale(1.1);
}
.overflow {
  overflow: hidden;
}
.text {
  position: absolute;
  bottom: 0;
  width: 12%;
  height: auto;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 100;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  main {
    padding-left: 15px;
    padding-right: 15px;
  }
  main > .grid > .row {
    width: 100%;
  }
  .text {
    width: 50%;
    font-size: 0.7rem;
  }
}
</style>
