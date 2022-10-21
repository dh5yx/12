/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-02 14:03:03
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 13:55:20
 */
import { defineStore } from 'pinia';

interface AuthState {
	authButtons: {
		[key: string]: any;
	};
	authRouter: string[];
	obj: any;
}

export const useAuthStore = defineStore({
	id: 'useAuthStore',
	state: (): AuthState => ({
		// 用户按钮权限列表
		authButtons: {},
		// 路由权限列表
		authRouter: [],
		obj: {
			a: '1',
		},
	}),
	getters: {
		// 处理权限按钮数据，用于方便控制按钮
		authButtonsObj: state => {
			return state.authButtons;
		},
		// 后台返回的菜单数据，用于方便控制路由跳转时权限（这里已经处理成一维数组了）
		dynamicRouter: state => {
			return state.authRouter;
		},
	},
	actions: {
		// setAuthButtons
		async setAuthButtons(authButtonList: { [key: string]: any }) {
			this.authButtons = authButtonList;
		},
		// setAuthRouter
		async setAuthRouter(dynamicRouter: string[]) {
			this.authRouter = dynamicRouter;
		},
	},
	// persist: true,
	persist: {
		// 修改存储中使用的键名称，默认为当前 Store的 id
		key: 'useAuthStore',
		// 修改为 sessionStorage，默认为 localStorage
		storage: window.sessionStorage,
		// 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
		paths: ['authButtons', 'authRouter', 'obj.a'],
	},
});
