/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-21 13:41:19
 * @LastEditors: dh
 * @LastEditTime: 2022-01-24 09:13:18
 */
const userState = {
	name: 'deng',
};
export default {
	namespaced: true,
	state() {
		return userState;
	},
	mutations: {
		M_change_name(state: typeof userState, payload: string) {
			state.name = payload;
		},
	},
	actions: {
		A_change_name(store: { commit: Function }, payload: string) {
			store.commit('M_change_name', payload);
		},
	},
	modules: {},
};
