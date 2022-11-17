/*
 * @Description: 请求重试
 * @Author: dh
 * @Date: 2022-11-16 10:38:58
 * @LastEditors: dh
 * @LastEditTime: 2022-11-16 14:58:39
 */
import { isJsonStr, sleep } from '@/utils/util';
import type { AxiosError, AxiosInstance } from 'axios';

export function againRequest(err: AxiosError, axios: AxiosInstance) {
	const config = err.config as any;

	// config.retry 具体接口配置的重发次数
	if (!config || !config.retry) return Promise.reject(err);

	// 设置用于记录重试计数的变量 默认为0
	config.retry -= 1;

	// 判断是否超过了重试次数
	if (config.retry < 0) {
		return Promise.reject(err);
	}

	// 延时时间 这个时间目前只能在全局loading关闭前请求 ，待优化
	const timer = config.retryDelay || 199;

	// 重新发起axios请求
	return sleep(timer).then(function () {
		// 判断是否是JSON字符串
		// TODO: 未确认config.data再重发时变为字符串的原因
		if (config.data && isJsonStr(config.data)) {
			config.data = JSON.parse(config.data);
		}
		return axios(config);
	});
}
