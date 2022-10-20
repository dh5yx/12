import { createApp } from "vue";
import App from "./App.vue";

// * css
import "./styles/index.scss"

// * vue-router
import router from "@/router/index";

// * pinia
import Pinia from "@/store/index";

const app = createApp(App);

app.use(router);
app.use(Pinia);
app.mount("#app");
