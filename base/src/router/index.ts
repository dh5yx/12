import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// * 路由模块集合
const metaRouters = import.meta.globEager('./modules/*.ts');

const routes: Array<RouteRecordRaw> = [];

Object.keys(metaRouters).forEach((item: string) => {
	const itemRoute: any = metaRouters[item];
	Object.keys(itemRoute).forEach((key: string) => {
		routes.push(...itemRoute[key]);
	});
});

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() {
		return {
			el: '#app',
			top: 0,
			behavior: 'smooth',
		};
	},
});
export default router;
