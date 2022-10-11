/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 09:22:50
 * @LastEditors: dh
 * @LastEditTime: 2022-08-31 17:12:41
 */

// * 运行环境
export const MODE = import.meta.env.MODE;

// * 后端微服务端口名
export const PORT1 = "/api";

// * token
export const TOKEN_KEY = "token_key";

// * axios
const config: DevConfigType = {
	development: {
		baseURL: "",
		timeout: 30000,
	},
	production: {
		baseURL: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e",
		timeout: 30000,
	},
};

export default config[MODE];
