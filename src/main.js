import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.scss";
import router from "./router";
import { Vue3Mq } from "vue3-mq";

import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(Vue3Mq, {
    preset: "devices",
  })
  .mount("#app");
