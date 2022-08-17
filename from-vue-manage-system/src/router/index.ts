import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/layout/index.vue';
import { useAuthStore } from '@/stores/modules/auth';

// const modules = import.meta.globEager('./modules/*.ts');
// console.log(modules);
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Layout,
			redirect: '/home',
			children: [
				{
					path: '/home',
					name: 'Home',
					component: () => import('@/views/home/index.vue'),
					meta: {
						title: '首页',
					},
				},
				{
					path: '/i18n',
					name: 'i18n',
					component: () => import('@/views/i18n/index.vue'),
					meta: {
						title: '国际化',
					},
				},
				{
					path: '/charts',
					name: 'charts',
					component: () => import('@/views/charts/index.vue'),
					meta: {
						title: '图表',
					},
				},
				{
					path: '/icon',
					name: 'icon',
					component: () => import('@/views/icon/index.vue'),
					meta: {
						title: '自定义图标',
					},
				},
			],
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/login/index.vue'),
			meta: {
				title: '登录',
			},
		},
		{
			path: '/:pathMatch(.*)',
			component: () => import('@/views/error/404.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();

	if (to.path === '/login') {
		next();
	} else {
		if (!authStore.userInfo.userName) {
			next('/login');
		} else {
			next();
		}
	}
});

export default router;
