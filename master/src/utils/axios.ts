/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:35:52
 * @LastEditors: dh
 * @LastEditTime: 2022-07-20 11:32:32
 */
import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { AxiosCanceler } from './axiosCancel';

const baseURL = 'https://api.github.com';

const axios = Axios.create({
    baseURL,
    timeout: 20000, // 请求超时 20s
});

const axiosCanceler = new AxiosCanceler();

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        /**
         * 根据你的项目实际情况来对 config 做处理
         * 这里对 config 不做任何处理，直接返回
         */
        // * 将当前请求添加到 pending 中
        axiosCanceler.addPending(config);
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response: AxiosResponse) => {
        /**
         * 根据你的项目实际情况来对 response 和 error 做处理
         * 这里对 response 和 error 不做任何处理，直接返回
         */
        const { config } = response;
        // * 在请求结束后，移除本次请求
        axiosCanceler.removePending(config);
        return response;
    },
    (error: any) => {
        if (error.response && error.response.data) {
            const code = error.response.status;
            const msg = error.response.data.message;
            ElMessage.error(`Code: ${code}, Message: ${msg}`);
            console.error(`[Axios Error]`, error.response);
        } else {
            ElMessage.error(`${error}`);
        }
        return Promise.reject(error);
    },
);

export default axios;
