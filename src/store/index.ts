/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-21 13:41:19
 * @LastEditors: dh
 * @LastEditTime: 2022-01-24 09:21:27
 */
import { createStore } from 'vuex';
import user from './models/user';

export default createStore({
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
