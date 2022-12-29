import { defineStore } from 'pinia';

export const useUserStore = defineStore({
	id: 'counter',
	state: () => ({
		name: '貂蝉',
	}),
	getters: {},
	actions: {},
});
