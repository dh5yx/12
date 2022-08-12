/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 15:46:59
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 15:12:43
 */
import layout from "@/layout/index.vue";

export default [
	{
		path: "/assembly",
		component: layout,
		redirect: "/assembly/guide",
		meta: { title: "常用组件" },
		children: [
			{
				path: "/assembly/guide",
				component: () => import("@/views/assembly/guide/index.vue"),
				children: [],
				meta: {
					title: "引导页",
				},
			},
			{
				path: "/assembly/selectIcon",
				component: () => import("@/views/assembly/selectIcon/index.vue"),
				children: [],
				meta: {
					title: "icon选择",
				},
			},
			{
				path: "/assembly/uploadImg",
				component: () => import("@/views/assembly/uploadImg/index.vue"),
				children: [],
				meta: {
					title: "图片上传",
				},
			},
			{
				path: "/assembly/batchImport",
				component: () => import("@/views/assembly/batchImport/index.vue"),
				children: [],
				meta: {
					title: "批量上传",
				},
			},
			{
				path: "/assembly/wangEditor",
				component: () => import("@/views/assembly/wangEditor/index.vue"),
				children: [],
				meta: {
					title: "富文本",
				},
			},
		],
	},
];
