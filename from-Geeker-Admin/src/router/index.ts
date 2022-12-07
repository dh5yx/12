/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 16:46:10
 * @LastEditors: dh
 * @LastEditTime: 2022-11-17 17:25:47
 */
import NProgress from '@/config/nprogress';
import routes from './routes';
import axiosCancel from '@/utils/http/axiosCancel';
import { createRouter, createWebHistory } from 'vue-router';
import { useGlobalStore } from '@/stores/index';
import { useAuthStore } from '@/stores/modules/auth';
// 白名单列表，也可以在路由表里添加字段来表示不需要权限的，然后过滤出来
const whiteList = <Array<string>>['/login'];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next) => {
	const globalStore = useGlobalStore();
	const authStore = useAuthStore();

	document.title = to.meta.title;

	// * 开启路由进度条
	NProgress.start();

	// * 在跳转路由之前，清除所有的请求
	axiosCancel.removeAllPendingAxios();

	if (!globalStore.token) {
		if (whiteList.indexOf(to.path) !== -1) next();
		else next('/login');
		return;
	}

	// * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组) 由 path 组成
	const dynamicRouter = authStore.dynamicRouter;

	// * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
	const staticRouter = ['/', '/home/index', '/403', '/login'];

	// * 所有可访问路由集合
	const routerList = [...dynamicRouter, ...staticRouter];

	if (routerList.indexOf(to.path) !== -1) next();
	else next({ path: '/403' });
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
