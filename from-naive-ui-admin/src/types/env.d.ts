/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 16:45:32
 * @LastEditors: dh
 * @LastEditTime: 2022-08-31 11:18:50
 */
/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module 'mockjs';

// 环境配置
interface DevConfigType {
	[key: string]: {
		[key: string]: string | number;
	};
}
