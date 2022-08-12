/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-10 11:08:19
 */
export default [
	{
		path: "/403",
		component: () => import("@/views/error/403.vue"),
		children: [],
		meta: {
			title: "403",
		},
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/views/error/404.vue"),
		children: [],
		meta: {
			title: "404",
		},
	},
	{
		path: "/500",
		component: () => import("@/views/error/500.vue"),
		children: [],
		meta: {
			title: "500",
		},
	},
];
