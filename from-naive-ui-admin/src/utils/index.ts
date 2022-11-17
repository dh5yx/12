import { h, resolveComponent } from 'vue';
import { NIcon } from 'naive-ui';
import type { Component } from 'vue';

// * 渲染icon组件
export function renderIcon(icon: string | Component) {
	if (typeof icon !== 'string') {
		// 方式一 h(组件)
		return () => h(NIcon, null, { default: () => h(icon as Component) });
	} else {
		// 方式二 h(resolveComponent(组件名))
		// return () => h(NIcon, null, { default: () => h(resolveComponent((icon || "") as string)) });
		return () => h(resolveComponent((icon || '') as string));
	}
}

/**
 * @description: 是否 json 字符串
 * @param {string} str
 * @return {*}
 */
export function isJsonStr(str: string) {
	if (typeof str == 'string') {
		try {
			let obj = JSON.parse(str);
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			console.log('error：' + str + '!!!' + e);
			return false;
		}
	}
}

/**
 * @description: 睡眠函数
 * @param {*} timer
 * @return {*}
 */
export function sleep(timer: number) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true);
		}, timer);
	});
}
