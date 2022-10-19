<script setup>
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["remove", "increment", "decrement"]);

const quantity = ref(props.product.quantity);
const increment = () => {
  quantity.value++;
  emits("increment", props.product);
};
const decrement = () => {
  quantity.value--;
  emits("decrement", props.product);
};
</script>

<template>
  <div class="card">
    <img :src="props.product.image" loading="lazy" />
    <div class="container">
      <h4>
        <b>{{ props.product.name }}</b>
      </h4>
      <h3>Price: ${{ props.product.price }}</h3>
      <br />
      <h3>
        Quantity:
        <b>
          <input v-model="quantity" />
          <font-awesome-icon icon="fa-solid fa-plus" @click="increment()" />
          <font-awesome-icon icon="fa-solid fa-minus" @click="decrement()" />
        </b>
      </h3>
      <br />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 0px 16px 0px 16px;
  margin-left: 5%;
}
h4 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
p {
  font-family: "Montserrat";
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
input {
  border: 1px solid rgba(1, 1, 1, 0.453);
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  width: 20%;
}
.fa-plus,
.fa-minus {
  margin-left: 3%;
}
img {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 30%;
  min-width: 30%;
  overflow: hidden;
}
img:hover {
  filter: brightness(50%);
}
@media screen and (max-width: 800px) {
  .card {
    margin-right: 5%;
    margin-left: 5%;
    flex-direction: column;
  }
  img {
    min-width: 50%;
  }
  .overflow {
    min-width: 100%;
  }
}
</style>
