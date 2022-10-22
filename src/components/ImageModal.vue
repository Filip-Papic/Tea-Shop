<script setup>
import { onMounted, onUnmounted } from "vue";
import { vOnClickOutside } from "@vueuse/components";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: {
    type: String,
    default: "none",
  },
  product: {
    type: Object,
    required: true,
  },
});

const handleKeyboard = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyboard);
});
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyboard);
});

const emit = defineEmits(["update:modelValue"]);
const closeModal = () => {
  emit("update:modelValue", "none");
};
</script>

<template>
  <div></div>
  <div id="imageModal" class="modal">
    <span class="close" @click="closeModal">&times;</span>
    <img
      class="modal-content"
      id="img01"
      :src="props.product.image"
      :alt="props.product.name"
      v-on-click-outside="closeModal"
    />
    <div id="caption"></div>
  </div>
</template>

<style scoped>
.modal {
  display: v-bind("props.modelValue");
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
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
