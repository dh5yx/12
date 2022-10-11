import type { RouteRecordRaw } from "vue-router";

// 继承路由类型
export type RouteRecordRawItem = RouteRecordRaw & {
	meta: {
		title?: String;
		close?: Boolean;
	};
};

export type RouterArray = Array<RouteRecordRawItem>;

// * 路由模块集合
const modules: any = import.meta.globEager("./modules/*.ts");

// * 路由模块集合
const routerArray: RouterArray = Object.keys(modules)
	.reduce((a: RouterArray, b: string) => a.concat(modules[b].default), [])
	.sort((a: any, b: any) => {
		return (a.meta ? a.meta.sort : 0) - (b.meta ? b.meta.sort : 0);
	});

export default routerArray;
