/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 15:10:07
 */
import layout from '@/layout/index.vue';

export default [
	{
		path: '/echarts',
		redirect: '/echarts/nestedChart',
		component: layout,
		meta: { title: 'Echarts' },
		children: [
			{
				path: 'nestedChart',
				component: () => import('@/views/echarts/nestedChart/index.vue'),
				children: [],
				meta: {
					title: '嵌套环形图',
				},
			},
			{
				path: 'radarChart',
				component: () => import('@/views/echarts/radarChart/index.vue'),
				children: [],
				meta: {
					title: '雷达图',
				},
			},
			{
				path: 'pieChart',
				component: () => import('@/views/echarts/pieChart/index.vue'),
				children: [],
				meta: {
					title: '饼图',
				},
			},
			{
				path: 'lineChart',
				component: () => import('@/views/echarts/lineChart/index.vue'),
				children: [],
				meta: {
					title: '面积图',
				},
			},
			{
				path: 'columnChart',
				component: () => import('@/views/echarts/columnChart/index.vue'),
				children: [],
				meta: {
					title: '柱状图',
				},
			},
			{
				path: 'waterChart',
				component: () => import('@/views/echarts/waterChart/index.vue'),
				children: [],
				meta: {
					title: '水型图',
				},
			},
		],
	},
];
