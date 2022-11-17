/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-09 15:57:06
 * @LastEditors: dh
 * @LastEditTime: 2022-11-16 11:15:36
 */
/**
 * @description: 获取指定区间 随机整数
 * @param {number} start  随机数最小值
 * @param {number} end 随机数最大值
 * @return {*}
 */
export function randomNum(start: number, end: number) {
	return Math.floor(Math.random() * (end - start) + start);
}

/**
 * @description 获取浏览器默认语言
 * @return string
 */
export function getBrowserLang() {
	let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
	let defaultBrowserLang = '';
	if (browserLang.toLowerCase() === 'cn' || browserLang.toLowerCase() === 'zh' || browserLang.toLowerCase() === 'zh-cn') {
		defaultBrowserLang = 'zh';
	} else {
		defaultBrowserLang = 'en';
	}
	return defaultBrowserLang;
}

/**
 * @description 使用递归处理路由菜单，生成一维数组
 * @param {Array} menuList 所有菜单列表
 * @param {Array} newArr 菜单的一维数组
 * @return array
 */
export function handleRouter(routerList: Menu.MenuOptions[], newArr: string[] = []) {
	routerList.forEach((item: Menu.MenuOptions) => {
		typeof item === 'object' && item.path && newArr.push(item.path);
		item.children && item.children.length && handleRouter(item.children, newArr);
	});
	return newArr;
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
