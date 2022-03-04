/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:22:46
 * @LastEditors: dh
 * @LastEditTime: 2022-01-24 09:25:40
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home.vue';
import Vuex from '@/views/vuex.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/vuex',
        name: 'Vuex',
        component: Vuex,
    },
    {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/views/axios.vue'), // 懒加载组件
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
