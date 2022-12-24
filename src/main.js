import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.scss";
import router from "./router";
import { Vue3Mq } from "vue3-mq";

createApp(App)
  .use(router)
  .use(Vue3Mq, {
    preset: "devices",
  })
  .mount("#app");
