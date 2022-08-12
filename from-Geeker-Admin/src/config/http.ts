/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 09:22:50
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:08:31
 */
export const MODE = import.meta.env.MODE;

const config: DevConfigType = {
	development: {
		baseURL: "/api",
		timeout: 30000,
	},
	production: {
		baseURL: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e",
		timeout: 30000,
	},
};

export default config[MODE];
