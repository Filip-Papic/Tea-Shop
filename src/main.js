import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faShoppingBag,
  faSearch,
  faXmark,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faShoppingBag,
  faUser,
  faSearch,
  faFacebookF,
  faGooglePlus,
  faTwitter,
  faInstagram,
  faXmark,
  faMinus,
  faPlus
);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
