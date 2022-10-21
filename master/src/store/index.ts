/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-21 13:41:19
 * @LastEditors: dh
 * @LastEditTime: 2022-10-21 09:33:51
 */
import { createStore } from 'vuex';
import user from './models/user';

interface State {
	age: number;
}

export default createStore<State>({
	state: {
		age: 20,
	},
	mutations: {
		M_change_age(state, payload) {
			state.age += payload;
		},
	},
	actions: {
		A_change_age({ commit }, payload) {
			commit('M_change_age', payload);
		},
	},
	modules: { user },
});
