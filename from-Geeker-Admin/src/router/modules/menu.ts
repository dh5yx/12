/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 16:35:05
 */
import layout from "@/layout/index.vue";

export default [
	{
		path: "/menu",
		redirect: "/menu/menu1",
		component: layout,
		meta: { title: "菜单嵌套" },
		children: [
			{
				path: "/menu/menu1",
				name: "Menu1",
				component: () => import("@/views/menu/menu1/index.vue"),
				children: [],
				meta: {
					title: "菜单1",
					keepAlive: true,
				},
			},
			{
				path: "/menu/menu2/menu21",
				component: () => import("@/views/menu/menu2/menu21/index.vue"),
				children: [],
				meta: {
					title: "菜单2-1",
					keepAlive: true,
				},
			},
			{
				path: "/menu/menu2/menu22/menu221",
				component: () => import("@/views/menu/menu2/menu22/menu221/index.vue"),
				children: [],
				meta: {
					title: "菜单2-2-1",
					keepAlive: true,
				},
			},
			{
				path: "/menu/menu2/menu22/menu222",
				component: () => import("@/views/menu/menu2/menu22/menu222/index.vue"),
				children: [],
				meta: {
					title: "菜单2-2-2",
					keepAlive: true,
				},
			},
			{
				path: "/menu/menu2/menu23",
				component: () => import("@/views/menu/menu2/menu23/index.vue"),
				children: [],
				meta: {
					title: "菜单2-3",
					keepAlive: true,
				},
			},

			{
				path: "/menu/menu3",
				name: "Menu3",
				component: () => import("@/views/menu/menu3/index.vue"),
				children: [],
				meta: {
					title: "菜单3",
					keepAlive: true,
				},
			},
		],
	},
];
