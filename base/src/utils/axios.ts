import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
	baseURL: '/api',
	// 指定请求超时的毫秒数
	timeout: 1000,
	// 表示跨域请求时是否需要使用凭证
	withCredentials: false,
});

service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// do something
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	}
); // Response interceptors

service.interceptors.response.use(
	(response: AxiosResponse) => {
		// do something
		return response;
	},
	(error: any) => {
		// do something
		return Promise.reject(error);
	}
);

export default service;
