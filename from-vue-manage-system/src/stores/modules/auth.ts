import { defineStore } from 'pinia';

interface AuthStoreType {
	userInfo: UserInfo;
}

export const useAuthStore = defineStore({
	id: 'useAuthStore',
	state: (): AuthStoreType => {
		return {
			userInfo: {},
		};
	},
	getters: {},
	actions: {
		setUserInfo(payload: UserInfo) {
			this.userInfo = payload;
		},
	},
	persist: true,
});
