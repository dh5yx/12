export default {
	path: "/dashboard",
	name: "dashboard",
	redirect: "/dashboard/console",
	component: () => import("@/layout/index.vue"),
	meta: {
		sort: 1,
		title: "Dashboard",
		icon: "DashboardOutlined",
	},
	children: [
		{
			path: "/dashboard/console",
			name: "console",
			component: () => import("@/views/dashboard/console/index.vue"),
			meta: {
				title: "控制台",
				close: false,
			},
		},
		{
			path: "/dashboard/workplace",
			name: "workplace",
			component: () => import("@/views/dashboard/workplace/index.vue"),
			meta: {
				title: "工作台",
			},
		},
	],
};
