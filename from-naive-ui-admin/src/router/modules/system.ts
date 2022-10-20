export default {
	path: '/system',
	redirect: '/system/console',
	name: 'system',
	component: () => import('@/layout/index.vue'),
	meta: {
		sort: 2,
		title: '系统设置',
		icon: 'OptionsSharp',
	},
	children: [
		{
			path: '/system/menu',
			name: 'settingMenu',
			component: () => import('@/views/system/menu/index.vue'),
			meta: {
				title: '菜单权限管理',
			},
		},
		{
			path: '/system/role',
			name: 'settingRole',
			component: () => import('@/views/system/role/index.vue'),
			meta: {
				title: '角色权限管理',
			},
		},
	],
};
