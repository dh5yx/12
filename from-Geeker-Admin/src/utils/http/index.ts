/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 09:17:15
 * @LastEditors: dh
 * @LastEditTime: 2022-11-14 16:41:50
 */
import axios from 'axios';
import httpConfig from '@/config/http';
import axiosCancel from './axiosCancel';
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading';
import { useGlobalStore } from '@/stores/index';
import { TOKEN_KEY } from '@/config';
import { ElMessage } from 'element-plus';
import { checkStatus } from './checkStatus';
import router from '@/router/index';
import type { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

axios.defaults.baseURL = httpConfig.baseURL as string;
axios.defaults.timeout = httpConfig.timeout as number;

const service = axios.create({});

service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 开启全局loading
		showFullScreenLoading();

		// 添加axios到列表
		axiosCancel.addPendingAxios(config);

		// 获取token
		const globalStore = useGlobalStore();

		return { ...config, headers: { [TOKEN_KEY]: globalStore.token } };
	},
	(error: AxiosError) => {
		// 关闭全局loading
		tryHideFullScreenLoading();

		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	(response: AxiosResponse) => {
		const { data, config } = response;

		// 关闭全局loading
		tryHideFullScreenLoading();

		// 在请求结束后，从axios到列表移除本次请求
		axiosCancel.removePendingAxios(config);

		return data;
	},
	(error: AxiosError) => {
		const { response } = error;
		// 关闭全局loading
		tryHideFullScreenLoading();
		// 请求超时单独判断，因为请求超时没有 response
		if (error.message.indexOf('timeout') !== -1) ElMessage.error('请求超时！请您稍后重试');
		// 根据响应的错误状态码，做不同的处理
		if (response) checkStatus(response.status);
		// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
		if (!window.navigator.onLine) router.replace({ path: '/500' });
		return Promise.reject(error);
	}
);

export default {
	get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponseType<T>> => service.get(url, config),

	post: <T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponseType<T>> => service.post(url, data, config),

	delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponseType<T>> => service.delete(url, config),

	put: <T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponseType<T>> => service.put(url, data, config),

	request: <T = any>(config: Object): Promise<AxiosResponseType<T>> => service.request(config),
};
