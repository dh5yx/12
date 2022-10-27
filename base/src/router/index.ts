import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Index',
		meta: {},
		component: () => import('@/views/home/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
