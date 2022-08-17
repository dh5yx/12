import { defineStore, createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
interface globalStoreType {
	isCollapse: boolean;
	locale: string;
	openedTabs: Array<Menu>;
}

export const useGlobalStore = defineStore({
	id: 'useGlobalStore',
	state: (): globalStoreType => ({
		isCollapse: false, // 菜单折叠
		locale: 'en', // 语言
		openedTabs: [], // 打开的菜单
	}),
	getters: {},
	actions: {
		setCollapse() {
			this.isCollapse = !this.isCollapse;
		},
		addTabs(payload: Menu) {
			this.openedTabs.push(payload);
		},
		removeTabs(payload: string) {
			this.openedTabs = this.openedTabs.filter(v => v.index !== payload);
		},
	},
	persist: true,
});

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

export default pinia;
