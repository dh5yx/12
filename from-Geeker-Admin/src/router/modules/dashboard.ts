/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 15:10:01
 */
import layout from '@/layout/index.vue';

export default [
	{
		path: '/dashboard',
		redirect: '/dashboard/dataVisualize',
		component: layout,
		meta: {
			title: 'Dashboard',
		},
		children: [
			{
				path: '/dashboard/embedded',
				component: () => import('@/views/dashboard/embedded/index.vue'),
				children: [],
				meta: {
					title: '内嵌页面',
				},
			},
			{
				path: '/dashboard/dataVisualize',
				component: () => import('@/views/dashboard/dataVisualize/index.vue'),
				children: [],
				meta: {
					title: '数据可视化',
				},
			},
		],
	},
];
