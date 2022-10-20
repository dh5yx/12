export default {
	path: '/about',
	name: 'about',
	redirect: '/about/index',
	component: () => import('@/layout/index.vue'),
	meta: {
		sort: 11,
		root: true,
	},
	children: [
		{
			path: '/about/index',
			name: 'about_index',
			component: () => import('@/views/about/index.vue'),
			meta: {
				title: '关于',
				icon: 'ProjectOutlined',
				activeMenu: 'about',
			},
		},
	],
};
