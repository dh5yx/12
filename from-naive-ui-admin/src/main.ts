import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// css
import "@/styles/index.scss";
// native-ui
import NativeUi from "@/plugins/native-ui";
// viocns
import viocns from "@/plugins/vicons-vant";
import ionicons5 from "@/plugins/vicons-ionicons5";

const app = createApp(App);

app.use(router).use(NativeUi).use(viocns).use(ionicons5).mount("#app");
