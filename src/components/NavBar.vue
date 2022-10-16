<template>
  <nav>
    <input type="checkbox" id="nav-check" />
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="items">
      <RouterLink to="/">SHOP</RouterLink>
      <RouterLink to="/">BLOG</RouterLink>
      <RouterLink to="/">CONTACTS</RouterLink>
    </div>
    <a href="/">
      <img src="@\assets\logo.png" alt="logo" />
    </a>
    <div class="items-right">
      <input type="text" placeholder="Type & hit enter..." id="search" />
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" id="searchIcon" />
      <RouterLink to="/"
        ><font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </RouterLink>
      <RouterLink to="/"
        ><font-awesome-icon icon="fa-regular fa-user" />
      </RouterLink>
      <RouterLink to="/"
        ><font-awesome-icon icon="fa-solid fa-bag-shopping" />
        <span class="badge">0</span>
      </RouterLink>
    </div>
  </nav>
  asdasdad
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  height: 6rem;
  margin-left: 11.5vw;
  margin-right: 11.5vw;
}
nav > #nav-check {
  display: none;
}
nav > .items-right > #search {
  display: none;
}
nav > .items-right > #searchIcon {
  display: none;
}
@media (max-width: 700px) {
  nav {
    margin-left: 2vw;
    margin-right: 2vw;
    justify-content: space-between;
    margin-top: -3vw;
  }
  nav > .nav-btn {
    display: inline-block;
    position: relative;
  }
  nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 7px;
    border-top: 2px solid #000;
  }
  nav > .items-right {
    width: 30px;
    margin-bottom: 40px;
  }
  .fa-magnifying-glass,
  .fa-user {
    display: none;
  }
  nav > .items {
    position: absolute;
    display: block;
    width: 100%;
    height: 0px;
    transition: height 1s ease;
    overflow-y: hidden;
    top: 50px;
    margin-left: -30px;
    margin-right: 2vw;
    background-color: #fff;
    z-index: 1;
  }
  nav > .items > a {
    display: block;
    margin-top: 10vw;
    width: 100%;
    padding: 10px 13px;
  }
  nav > .items > a + a {
    margin-top: 1vw;
  }
  nav > .items > a:after {
    background-color: #ddd;
  }
  nav > #nav-check:not(:checked) ~ .items {
    display: none;
  }
  nav > #nav-check:checked ~ .items {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
  nav > .items-right > #search {
    position: absolute;
    width: 96%;
    height: 30px;
    border: 1px solid #000;
    margin-top: 50px;
    margin-right: -3vw;
    z-index: 1;
    border-style: none none solid none;
    border-color: rgba(0, 0, 0, 0.19);
  }
  nav > .items-right > #searchIcon {
    position: absolute;
    margin-top: 50px;
    z-index: 2;
    margin-right: -5vw;
  }
  nav > .items-right > #search:focus {
    outline: none;
  }
  nav > .items-right > #search::placeholder {
    font-family: "Josefin Sans";
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.582);
  }
  nav > #nav-check:not(:checked) ~ .items-right > #search {
    display: none;
  }
  nav > #nav-check:checked ~ .items-right > #search {
    display: block;
  }
  nav > #nav-check:not(:checked) ~ .items-right > #searchIcon {
    display: none;
  }
  nav > #nav-check:checked ~ .items-right > #searchIcon {
    display: block;
  }
}

img {
  width: 3em;
  height: 1.8em;
}

.fa-magnifying-glass,
.fa-user,
.fa-bag-shopping {
  font-size: 1em;
  margin: 0 0.5em;
  color: rgba(0, 0, 0, 0.632);
  padding: 0.4rem;
}

.fa-magnifying-glass:hover,
.fa-user:hover,
.fa-bag-shopping:hover {
  color: rgba(0, 0, 0, 0.458);
}

.badge {
  top: 1rem;
  right: 1rem;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  margin-top: -33px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}

.items-right {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: 1.7rem;
  padding: 1.4rem;
  width: 100%;
}

.items {
  margin-bottom: 2rem;
  margin-top: 1.7rem;
  padding: 1rem;
  width: 100%;
}

.items a {
  color: rgba(0, 0, 0, 0.632);
  text-decoration: none;
  margin-right: 1.2rem;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1rem;
  font-family: "Mukta", sans-serif;
}

.items a {
  display: inline-block;
  position: relative;
  padding: 0.2em 0;
}

.items a:hover {
  color: rgba(0, 0, 0, 0.458);
}

.items a::after {
  content: "";
  position: absolute;
  top: 2.5em;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: rgb(0, 0, 0);
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

.items a::after {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

.items a:hover::after,
a:focus::after {
  transform: scale(1.2);
}
</style>
