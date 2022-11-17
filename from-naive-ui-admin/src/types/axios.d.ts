import { AxiosRequestConfig } from 'axios';

declare module 'axios' {
	export interface AxiosRequestConfig {
		retry?: any;
		// [自定义属性声明]
	}
}
