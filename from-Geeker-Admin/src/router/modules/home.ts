/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-17 14:03:24
 */
import layout from "@/layout/index.vue";

export default [
	{
		path: "/",
		component: layout,
		redirect: "/home/index",
		children: [
			{
				path: "/home/index",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					title: "首页",
				},
			},
		],
	},
];
