/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 15:09:51
 */
import layout from "@/layout/index.vue";

export default [
	{
		path: "/",
		name: "layout",
		component: layout,
		// redirect: "/home/index",
		children: [
			{
				path: "",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					title: "首页",
				},
			},
		],
	},
];
