/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 16:45:32
 * @LastEditors: dh
 * @LastEditTime: 2022-08-10 16:42:55
 */
import { defineStore, createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import router from '@/router/index';
import type { TabPanelName } from 'element-plus';
interface GlobalStoreType {
	token: string;
	isCollapse: boolean;
	menuList: Menu.MenuOptions[];
	tabs: Array<tabsItemType>;
}

export const useGlobalStore = defineStore({
	id: 'useGlobalStore',
	state: (): GlobalStoreType => ({
		token: '',
		isCollapse: false,
		menuList: [],
		tabs: [{ title: '首页', path: '/home/index', close: false, icon: 'home-filled' }],
	}),
	getters: {},
	actions: {
		setToken(token: string) {
			this.token = token;
		},
		setCollapse() {
			this.isCollapse = !this.isCollapse;
		},
		setMenuList(menuList: Array<Menu.MenuOptions>) {
			this.menuList = menuList;
		},
		addTabs(payload: tabsItemType) {
			this.tabs.push(payload);
		},
		removeTabs(payload: TabPanelName, path: string) {
			if (path === payload) {
				const index = this.tabs.findIndex(v => v.path === path);
				const nextTab = this.tabs[index + 1] || this.tabs[index - 1];
				router.push({ path: nextTab.path });
			}
			this.tabs = this.tabs.filter(v => v.path !== payload);
		},
	},
	persist: true,
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

export default pinia;
