/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:56:08
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 15:40:24
 */

import type { RouteRecordRaw } from 'vue-router';

// * 路由模块集合
export const routerArray: Array<RouteRecordRaw> = [];

// * 路由模块集合
const metaRouters = import.meta.globEager('./modules/*.ts');

Object.keys(metaRouters).forEach((item: string) => {
	const itemRoute: any = metaRouters[item];
	Object.keys(itemRoute).forEach((key: any) => {
		routerArray.push(...itemRoute[key]);
	});
});

/**
 * @description 路由配置简介（💢没有使用动态路由，路由全部配置在本地，需要使用动态路由请自行改造）
 * @param path ==> 路由路径
 * @param name ==> 路由名称
 * @param redirect ==> 路由重定向
 * @param component ==> 路由组件
 * @param meta ==> 路由元信息
 * @param meta.requireAuth ==> 是否需要权限验证
 * @param meta.keepAlive ==> 是否需要缓存该路由
 * @param meta.title ==> 路由标题
 * */
const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
	},
	...routerArray,
	{
		path: '/:pathMatch(.*)',
		redirect: { name: '404' },
	},
];

export default routes;
