import { defineStore } from 'pinia';
import layoutSetting from '@/config/layoutSetting';

type useLayoutSettingStore = typeof layoutSetting;

export const useLayoutSettingStore = defineStore({
	id: 'useSetting',
	state: (): useLayoutSettingStore => layoutSetting,
	getters: {},
	actions: {},
	persist: true,
});
