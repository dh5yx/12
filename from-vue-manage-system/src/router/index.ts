import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/login/index.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/login",
		},
		{
			path: "/login",
			name: "Login",
			component: Login,
			meta: {
				title: "登录",
			},
		},
	],
});

export default router;
