/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-10 11:06:54
 */

export default [
	{
		path: '/dataScreen',
		component: () => import('@/views/dataScreen/index.vue'),
		meta: {
			title: '数据大屏',
		},
	},
];
