import { createRouter, createWebHistory } from "vue-router";
import { HOME_PATH } from "@/config/routeSetting";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: HOME_PATH,
    },
    ...routes,
  ],
});

export default router;
