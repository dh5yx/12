/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 10:42:28
 * @LastEditors: dh
 * @LastEditTime: 2022-08-17 14:01:14
 */
import { defineStore } from 'pinia';

type storeType = {
	size: ElementSize;
	locale: string;
};

export const useElementStore = defineStore({
	id: 'useElementStore',
	state: (): storeType => ({
		size: 'default',
		locale: '',
	}),
	getters: {},
	actions: {
		changeSize(payload: ElementSize) {
			this.size = payload;
		},
		changeLocale(payload: string) {
			this.locale = payload;
		},
	},
	persist: true,
});
