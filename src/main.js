import "./assets/normalize.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//Pinia
import { createPinia } from "pinia";
const pinia = createPinia();

//Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});

app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(Toast);

app.mount("#app");
