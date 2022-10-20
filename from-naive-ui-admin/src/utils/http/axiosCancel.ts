/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-12 09:32:10
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:24:16
 */
import axios from 'axios';
import { isFunction } from '@/utils/is/index';
import type { Canceler, AxiosRequestConfig } from 'axios';

const CancelToken = axios.CancelToken;

// * 声明一个 Map 用于存储每个请求的标识 和 取消函数
export const pendingAxios = new Map<string, Canceler>();

// * 序列化参数,这里不完美，axios 请求时 参数为json，响应回来的config里面变为json的字符串了
export const getPendingUrl = (config: AxiosRequestConfig) =>
	[config.method, config.url, JSON.stringify(config.data), JSON.stringify(config.params)].join('&');

export default {
	// 添加单个请求
	addPendingAxios(config: AxiosRequestConfig) {
		// * 在请求开始前，对之前的请求做检查取消操作
		this.removePendingAxios(config);
		const url = getPendingUrl(config);
		config.cancelToken = new CancelToken(function (cancel) {
			!pendingAxios.has(url) && pendingAxios.set(url, cancel);
		});
	},
	// 移除单个请求
	removePendingAxios(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);
		if (pendingAxios.has(url)) {
			const cancel = pendingAxios.get(url);
			cancel && isFunction(cancel) && cancel();
			pendingAxios.delete(url);
		}
	},
	// 移除全部请求
	removeAllPendingAxios() {
		pendingAxios.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});
	},
};
