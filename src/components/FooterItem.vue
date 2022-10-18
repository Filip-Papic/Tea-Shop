<script setup></script>

<template>
  <footer>
    <div class="container">
      <div class="footer-left">
        <h3 class="copy">All rights reserved. © 2022</h3>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
      </div>
      <div class="footer-right">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
        <font-awesome-icon icon="fa-brands fa-google-plus" />
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  height: 6.5rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.86);
  text-align: center;
  margin-top: 6.9rem;
}
footer > .container {
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  height: 6rem;
  margin-left: 11.5vw;
  margin-right: 11.5vw;
  font-family: "Josefin Sans";
}
footer > .container > .footer-left {
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  height: 6rem;
}
footer > .container > .footer-left > a {
  color: rgba(255, 255, 255, 0.615);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 100;
  line-height: 1.5;
  padding: 0.5rem;
  text-decoration: underline;
}
h3 {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.312);
  padding-right: 1rem;
  font-weight: 100;
}
.fa-facebook-f,
.fa-google-plus,
.fa-twitter,
.fa-instagram {
  color: rgba(255, 255, 255, 0.312);
  font-size: 1rem;
  padding-right: 2rem;
  padding-top: 5%;
}
.fa-facebook-f:hover,
.fa-google-plus:hover,
.fa-twitter:hover,
.fa-instagram:hover {
  color: rgba(255, 255, 255, 0.458);
}

@media (max-width: 768px) {
  footer > .container {
    display: block;
    text-align: center;
  }
  footer > .container > .footer-left > a {
    font-size: 0.6rem;
  }
  h3 {
    font-size: 0.6rem;
    margin-left: 5%;
  }
  .fa-facebook-f,
  .fa-google-plus,
  .fa-twitter,
  .fa-instagram {
    font-size: 0.8rem;
  }

  footer > .container > .footer-left {
    display: block;
    text-align: center;
    height: 3rem;
  }
  footer > .container > .footer-right {
    margin-top: 0.5rem;
    margin-left: 9%;
    display: block;
    text-align: center;
    height: 3rem;
  }
  .copy {
    padding-top: 5%;
  }
}
</style>
