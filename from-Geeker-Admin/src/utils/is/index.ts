/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-12 09:52:03
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 09:54:57
 */

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
	return Object.prototype.toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: T) {
	return is(val, "Function");
}
