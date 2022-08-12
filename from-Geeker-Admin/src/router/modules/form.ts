/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 15:10:10
 */
import layout from "@/layout/index.vue";

export default [
	{
		path: "/form",
		redirect: "/form/basicForm",
		component: layout,
		meta: { title: "表单form" },
		children: [
			{
				path: "/form/basicForm",
				component: () => import("@/views/form/basicForm/index.vue"),
				children: [],
				meta: {
					title: "基础表单",
				},
			},
			{
				path: "/form/validateForm",
				component: () => import("@/views/form/validateForm/index.vue"),
				children: [],
				meta: {
					title: "校验表单",
				},
			},
			{
				path: "/form/dynamicForm",
				component: () => import("@/views/form/dynamicForm/index.vue"),
				children: [],
				meta: {
					title: "动态表单",
				},
			},
			{
				path: "/form/proForm",
				component: () => import("@/views/form/proForm/index.vue"),
				children: [],
				meta: {
					title: "超级表单",
				},
			},
		],
	},
];
