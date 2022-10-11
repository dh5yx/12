/**
 * @description: axios 返回数据接口，其中data使用泛型
 * @return {*}
 */
declare type AxiosResponseType<T> = {
	data: T;
	msg?: string;
	message?: string;
	code: string | number;
};
