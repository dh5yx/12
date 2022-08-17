/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-21 13:41:19
 * @LastEditors: dh
 * @LastEditTime: 2022-08-16 17:24:12
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
