import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import router from "@/router/index";
import { HOME_PATH } from "@/config/index";
interface GlobalStore {
	panels: Array<TabsItem>;
	isCollapse: boolean;
	isFullscreen: boolean;
	token: string;
	loading: boolean;
	isShowSetting: boolean;
}
export const useGlobalStore = defineStore({
	id: "useGlobalStore",
	state: (): GlobalStore => ({
		panels: [{ name: "控制台", path: HOME_PATH, close: false }],
		isCollapse: false,
		isFullscreen: false,
		token: "",
		loading: false,
		isShowSetting: false,
	}),
	getters: {},
	actions: {
		toggleFullscreen() {
			this.isFullscreen = !this.isFullscreen;
		},
		toggleCollapse() {
			this.isCollapse = !this.isCollapse;
		},
		addPanels(payload: TabsItem) {
			this.panels.push(payload);
		},
		removeTabs(payload: string, path?: string) {
			if (payload === path) {
				const index = this.panels.findIndex(v => v.path === path);
				const nextTab = this.panels[index + 1] || this.panels[index - 1];
				router.push(nextTab.path);
			}
			this.panels = this.panels.filter(v => v.path !== payload);
		},
		removeOtherTabs(payload: string) {
			this.panels = this.panels.filter(v => v.path === payload || !v.close);
		},
		removeALlTabs() {
			this.panels = this.panels.filter(v => !v.close);
			router.push(HOME_PATH);
		},
	},
	persist: true,
});

const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

export default pinia;
