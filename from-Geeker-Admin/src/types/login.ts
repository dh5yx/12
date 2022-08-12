/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 10:32:37
 * @LastEditors: dh
 * @LastEditTime: 2022-08-10 16:03:58
 */
export namespace LoginType {
	export interface ReqLoginForm {
		username: string;
		password: string;
	}
	export interface ResLogin {
		access_token: string;
	}
	export interface ResAuthButtons {
		[propName: string]: any;
	}
}
