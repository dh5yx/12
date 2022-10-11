export default {
	path: "/comp",
	name: "comp",
	redirect: "/comp/upload",
	component: () => import("@/layout/index.vue"),
	meta: {
		sort: 8,
		title: "组件实列",
		icon: "WalletOutlined",
	},
	children: [
		{
			path: "/comp/table",
			name: "comp-table",
			meta: {
				title: "表格",
			},
			children: [
				{
					path: "/comp/table/basic",
					name: "tableBasic",
					component: () => import("@/views/comp/table/basic/index.vue"),
					meta: {
						title: "基础表格",
					},
				},
				{
					path: "/comp/table/editCell",
					name: "tableEditCell",
					component: () => import("@/views/comp/table/editCell/index.vue"),
					meta: {
						title: "单元格编辑",
					},
				},
				{
					path: "/comp/table/editRow",
					name: "tableEditRow",
					component: () => import("@/views/comp/table/editRow/index.vue"),
					meta: {
						title: "整行编辑",
					},
				},
			],
		},
		{
			path: "/comp/form",
			name: "table-basic",
			meta: {
				title: "表单",
			},
			children: [
				{
					path: "/comp/form/basic",
					name: "compFormBasic",
					component: () => import("@/views/comp/form/basic/index.vue"),
					meta: {
						title: "基础使用",
					},
				},
				{
					path: "/comp/form/useForm",
					name: "compFormUseForm",
					component: () => import("@/views/comp/form/useForm/index.vue"),
					meta: {
						title: "useForm",
					},
				},
			],
		},
		{
			path: "/comp/upload",
			name: "upload",
			component: () => import("@/views/comp/upload/index.vue"),
			meta: {
				title: "上传图片",
			},
		},
		{
			path: "/comp/modal",
			name: "modal",
			component: () => import("@/views/comp/modal/index.vue"),
			meta: {
				title: "弹窗扩展",
			},
		},
		{
			path: "/comp/richtext",
			name: "richtext",
			component: () => import("@/views/comp/richtext/index.vue"),
			meta: {
				title: "富文本",
			},
		},
		{
			path: "/comp/drag",
			name: "drag",
			component: () => import("@/views/comp/drag/index.vue"),
			meta: {
				title: "拖拽",
			},
		},
	],
};
