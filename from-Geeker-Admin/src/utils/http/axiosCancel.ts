/*
 * @Description: 防止重复请求
 * @Author: dh
 * @Date: 2022-08-12 09:32:10
 * @LastEditors: dh
 * @LastEditTime: 2022-11-17 14:51:58
 */
import axios from 'axios';
import Qs from 'qs';
import { isFunction } from '@/utils/is/index';
import { isJsonStr } from '@/utils/util';
import type { Canceler, AxiosRequestConfig } from 'axios';

const CancelToken = axios.CancelToken;

// * 声明一个 Map 用于存储每个请求的标识 和 取消函数
export const pendingAxios = new Map<string, Canceler>();

// * 序列化参数
export const getPendingUrl = (config: AxiosRequestConfig) => {
	// 响应的时候，response.config 中的data 是一个JSON字符串，所以需要转换一下
	if (config && config.data && isJsonStr(config.data)) {
		config.data = JSON.parse(config.data);
	}
	return [config.method, config.url, Qs.stringify(config.data), Qs.stringify(config.params)].join('&');
};

export default {
	// 添加单个请求
	addPendingAxios(config: AxiosRequestConfig) {
		// * 在请求开始前，对之前的请求做检查取消操作
		this.removePendingAxios(config);
		const requestKey = getPendingUrl(config);
		config.cancelToken = new CancelToken(function (cancel) {
			!pendingAxios.has(requestKey) && pendingAxios.set(requestKey, cancel);
		});
	},
	// 移除单个请求
	removePendingAxios(config: AxiosRequestConfig) {
		const requestKey = getPendingUrl(config);
		if (pendingAxios.has(requestKey)) {
			const cancel = pendingAxios.get(requestKey);
			cancel && isFunction(cancel) && cancel();
			pendingAxios.delete(requestKey);
		}
	},
	// 移除全部请求
	removeAllPendingAxios() {
		pendingAxios.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});
	},
};
