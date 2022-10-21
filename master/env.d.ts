/*
 * @Description: 代码中获取这些以 VITE_ 为前缀的用户自定义环境变量的 TypeScript 智能提示。
 * @Author: dh
 * @Date: 2022-08-15 10:06:19
 * @LastEditors: dh
 * @LastEditTime: 2022-10-21 13:34:04
 */
interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_APP_BASE_URL: string;
	readonly VITE_APP_BASE_PORT: string;
	// 更多环境变量...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
