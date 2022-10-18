<script setup>
import { ref } from "vue";
const showModal = ref("none");
</script>
<template>
  <div class="product">
    <div class="row">
      <div class="column">
        <div class="product-image" @click="showModal = 'block'">
          <img src="../assets/green-tea-product.jpg" alt="Product" />
        </div>
      </div>
      <div class="column">
        <div class="product-info">
          <h1>asdasd</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum, nisl eget aliquam tincidunt, nunc elit aliquam massa, nec
            luctus nunc lorem eget dolor. Sed euismod, nisl eget aliquam
            tincidunt, nunc elit aliquam massa, nec luctus nunc lorem eget
            dolor. Sed euismod, nisl eget aliquam tincidunt, nunc elit aliquam
            massa, nec luctus nunc lorem eget dolor.
          </p>
          <div class="product-price">
            <p>$ 12.99</p>
          </div>
          <div class="product-quantity">
            <p>Quantity</p>
            <input type="number" min="1" max="10" value="1" />
          </div>
          <div class="product-add">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="imageModal" class="modal">
    <span class="close" @click="showModal = 'none'">&times;</span>
    <img
      class="modal-content"
      id="img01"
      src="../assets/green-tea-product.jpg"
    />
    <div id="caption"></div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 11.5rem;
  margin-left: 11.5rem;
  margin-top: 2rem;
}
.product > .row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.product > .row > .column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
}
.product > .row > .column > .product-image {
  display: flex;
  width: 90%;
  border: 1px solid #00000032;
  cursor: pointer;
}
.product > .row > .column > .product-image > img {
  width: 100%;
  height: 100%;
}
.modal {
  display: v-bind("showModal");
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}
.modal-content,
#caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}
@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}
.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
.product > .row > .column > .product-info {
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.product > .row > .column > .product-info > h1 {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}
.product > .row > .column > .product-info > p {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 5%;
}
.product > .row > .column > .product-info > .product-price {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5%;
}
.product > .row > .column > .product-info > .product-price > p {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
.product > .row > .column > .product-info > .product-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.product > .row > .column > .product-info > .product-quantity > p {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  padding-bottom: 1%;
}
.product > .row > .column > .product-info > .product-quantity > input {
  width: 50%;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.product > .row > .column > .product-info > .product-add {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  padding-top: 1%;
}
.product > .row > .column > .product-info > .product-add > button {
  width: 100%;
  height: 2rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
}

@media (max-width: 768px) {
  .product {
    margin-right: 5%;
    margin-left: 5%;
  }
  .product > .row {
    flex-direction: column;
  }
  .product > .row > .column {
    width: 100%;
  }
}
</style>
