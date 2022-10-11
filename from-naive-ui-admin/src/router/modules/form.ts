export default {
	path: "/form",
	redirect: "/form/basic",
	name: "form",
	component: () => import("@/layout/index.vue"),
	meta: {
		sort: 5,
		title: "Form表单",
		icon: "ProfileOutlined",
	},
	children: [
		{
			path: "/form/basic",
			name: "formBasic",
			component: () => import("@/views/form/basic/index.vue"),
			meta: {
				title: "基础表单",
			},
		},
		{
			path: "/form/detail",
			name: "formDetail",
			component: () => import("@/views/form/detail/index.vue"),
			meta: {
				title: "表单详情",
			},
		},
		{
			path: "/form/step",
			name: "formStep",
			component: () => import("@/views/form/step/index.vue"),
			meta: {
				title: "分步表单",
			},
		},
	],
};
