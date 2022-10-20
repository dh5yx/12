export default {
	path: '/frame',
	name: 'frame',
	component: () => import('@/layout/index.vue'),
	meta: {
		title: '外部页面',
		sort: 9,
		icon: 'ProfileOutlined',
	},
	children: [
		{
			path: '/frame/naive-admin',
			name: 'naive-admin',
			meta: {
				title: 'NaiveAdmin',
				frameSrc: 'https://www.naiveadmin.com',
			},
			component: () => import('@/views/iframe/index.vue'),
		},
		{
			path: '/frame/docs',
			name: 'frame-docs',
			meta: {
				title: '项目文档(内嵌)',
				frameSrc: 'https://naive-ui-admin-docs.vercel.app',
			},
			component: () => import('@/views/iframe/index.vue'),
		},
		{
			path: '/frame/naive',
			name: 'frame-naive',
			meta: {
				title: 'NaiveUi(内嵌)',
				frameSrc: 'https://www.naiveui.com',
			},
			component: () => import('@/views/iframe/index.vue'),
		},
	],
};
