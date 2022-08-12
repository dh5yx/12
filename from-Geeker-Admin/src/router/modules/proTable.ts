/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 15:10:18
 */
import layout from "@/layout/index.vue";

export default [
	{
		path: "/proTable",
		redirect: "/proTable/useHooks",
		component: layout,
		meta: {
			title: "超级表格",
		},
		children: [
			{
				path: "/proTable/useHooks",
				component: () => import("@/views/proTable/useHooks/index.vue"),
				children: [],
				meta: {
					title: "使用hooks",
				},
			},
			{
				path: "/proTable/useComponent",
				component: () => import("@/views/proTable/useComponent/index.vue"),
				children: [],
				meta: {
					title: "使用components",
				},
			},
		],
	},
];
