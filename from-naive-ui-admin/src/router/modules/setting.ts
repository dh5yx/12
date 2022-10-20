export default {
	path: '/setting',
	name: 'Setting',
	redirect: '/setting/account',
	component: () => import('@/layout/index.vue'),
	meta: {
		sort: 7,
		title: '设置页面',
		icon: 'SettingOutlined',
	},
	children: [
		{
			path: '/setting/account',
			name: 'settingAccount',
			component: () => import('@/views/setting/account/index.vue'),
			meta: {
				title: '个人设置',
			},
		},
		{
			path: '/setting/system',
			name: 'settingSystem',
			component: () => import('@/views/setting/system/index.vue'),
			meta: {
				title: '系统设置',
			},
		},
	],
};
