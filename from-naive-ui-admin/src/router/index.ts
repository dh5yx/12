import { createRouter, createWebHistory } from 'vue-router';
import { HOME_PATH } from '@/config/index';
import routes from './routes';

// import Layout from "@/layout/index.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: HOME_PATH,
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/login/index.vue'),
		},
		{
			path: '/redirect/:pathMatch(.*)*',
			name: 'Redirect',
			component: () => import('@/views/redirect/index.vue'),
		},
		...routes,
		{
			path: '/:pathMatch(.*)*',
			component: () => import('@/views/error/404.vue'),
		},
	],
});

router.beforeEach(async (to, from, next) => {
	window.$loading && window.$loading.start();
	next();
});

router.afterEach(() => {
	window.$loading && window.$loading.finish();
});

router.onError(error => {
	console.log(error, '路由错误');
});

export default router;
