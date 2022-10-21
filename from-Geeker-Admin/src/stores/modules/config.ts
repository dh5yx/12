/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-10 14:41:46
 * @LastEditors: dh
 * @LastEditTime: 2022-08-17 14:01:02
 */
import { defineStore } from 'pinia';

interface ConfigState {
	primary: string;
	isDark?: boolean;
	isGrey?: boolean;
	isWeak?: boolean;
	showBreadcrumb?: boolean;
	showTabs?: boolean;
	showFooter?: boolean;
}

export const useConfigStore = defineStore({
	id: 'useConfigStore',
	state: (): ConfigState => ({
		primary: '#ff6ff6',
		isDark: false,
		isGrey: false,
		isWeak: false,
		showBreadcrumb: true,
		showTabs: true,
		showFooter: true,
	}),
	getters: {},
	actions: {
		setPrimary(val: string) {
			this.primary = val;
		},
		setGrey(val: boolean) {
			this.isGrey = val;
		},
		setWeak(val: boolean) {
			this.isWeak = val;
		},
	},
	persist: true,
});
