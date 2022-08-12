/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 15:10:05
 */
import layout from "@/layout/index.vue";

export default [
	{
		path: "/directives",
		redirect: "/directives/copyDirect",
		component: layout,
		meta: { title: "自定义指令" },
		children: [
			{
				path: "/directives/copyDirect",
				component: () => import("@/views/directives/copyDirect/index.vue"),
				children: [],
				meta: {
					title: "复制指令",
				},
			},
			{
				path: "/directives/watermarkDirect",
				component: () => import("@/views/directives/watermark/index.vue"),
				children: [],
				meta: {
					title: "水印指令",
				},
			},
			{
				path: "/directives/dragDirect",
				component: () => import("@/views/directives/draggable/index.vue"),
				children: [],
				meta: {
					title: "拖拽指令",
				},
			},
			{
				path: "/directives/debounceDirect",
				component: () => import("@/views/directives/debounce/index.vue"),
				children: [],
				meta: {
					title: "防抖指令",
				},
			},
			{
				path: "/directives/throttleDirect",
				component: () => import("@/views/directives/throttle/index.vue"),
				children: [],
				meta: {
					title: "节流指令",
				},
			},
			{
				path: "/directives/longpressDirect",
				component: () => import("@/views/directives/longpress/index.vue"),
				children: [],
				meta: {
					title: "长按指令",
				},
			},
		],
	},
];
