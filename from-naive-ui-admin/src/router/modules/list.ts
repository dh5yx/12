export default {
	path: '/list',
	name: 'list',
	redirect: '/list/basic-list',
	component: () => import('@/layout/index.vue'),
	meta: {
		sort: 3,
		title: '列表页面',
		icon: 'TableOutlined',
	},
	children: [
		{
			path: '/list/basic-list',
			name: 'basic-list',
			component: () => import('@/views/list/basicList/index.vue'),
			meta: {
				title: '基础列表',
			},
		},
		{
			path: '/list/basic-info/:id?',
			name: 'basic-info',
			meta: {
				title: '基础详情',
				hidden: true,
				activeMenu: 'basic-list',
			},
			component: () => import('@/views/list/basicList/info.vue'),
		},
	],
};
