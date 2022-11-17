// eslint-disable-next-line
import { AxiosRequestConfig } from 'axios';
declare module 'axios' {
	export interface AxiosRequestConfig {
		// [自定义属性声明]
		retry?: any;
	}
}
