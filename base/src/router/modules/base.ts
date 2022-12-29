/*
 * @Description:基础路由，不需要权限的
 * @Author: dh
 * @Date: 2022-12-29 09:19:52
 * @LastEditors: dh
 * @LastEditTime: 2022-12-29 09:20:53
 */

export default [
	{
		path: '/',
		name: 'Index',
		meta: {},
		component: () => import('@/views/home/index.vue'),
	},
];
