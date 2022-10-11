/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 17:30:33
 * @LastEditors: dh
 * @LastEditTime: 2022-10-10 13:54:49
 */
import http from "@/utils/http/index";

export default {
	/**
	 * @description：登录
	 * @param params
	 */
	login: (params: LoginForm) => http.post("/api/login", params),
	/**
	 * @description：获取主控台信息
	 */
	getConsoleInfo: () => http.post("/dashboard/console"),
	/**
	 * @description：获取tree菜单列表
	 * @param params
	 */
	getMenuList: (params?: any) => http.get("/menu/list", params),
	/**
	 * @description：获取角色列表
	 * @param params
	 */
	getRoleList: (params?: any) => http.get("/role/list", params),
	/**
	 * @description: 获取列表
	 * @return {*}
	 */
	getTableList: (params?: any) => http.get("/table/list", params),
};
