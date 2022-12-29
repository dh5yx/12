import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Index',
		meta: {},
		component: () => import('@/views/index.vue'),
	},
	{
		path: '/about',
		name: 'About',
		meta: {},
		component: () => import('@/views/about.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
