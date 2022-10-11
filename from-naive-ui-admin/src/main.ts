import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./mock";

// css
import "@/styles/index.scss";
// tailwind
import "@/styles/tailwind.css";
// naive-ui
import NativeUi from "@/plugins/naive-ui";
// viocns
import viocns from "@/plugins/vicons-vant";
// ionicons5
import ionicons5 from "@/plugins/vicons-ionicons5";
// pinia
import pinia from "@/stores/index";

const app = createApp(App);

app.use(router).use(pinia).use(NativeUi).use(viocns).use(ionicons5).mount("#app");
