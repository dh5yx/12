/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 17:30:33
 * @LastEditors: dh
 * @LastEditTime: 2022-11-17 15:28:33
 */
import http from '@/utils/http';
import { PORT1 } from '@/config';
import type { LoginType } from '@/types/login';

type UserList = { datalist: Array<any> } & { [key: string]: String };

export default {
	login: (param: LoginType.ReqLoginForm) => http.post<{ access_token: string }>(PORT1 + '/login', param),
	menu: () => http.get(PORT1 + '/menu/list'),
	uploadImg: (params: FormData) => http.post(PORT1 + `/file/upload/img`, params),
	exportTem: (params: { [key: string]: string }) => http.post(PORT1 + `/user/export`, params, { responseType: 'blob' }),
	batchAddUser: (params: FormData) => http.post(PORT1 + `/user/import`, params),
	userList: (params: UserSearchParam) => http.post<UserList>(PORT1 + `/user/list`, params, { retry: 2 }), // 接口失敗重試2次
	buttons: () => http.get(`/auth/buttons`),
	changeStatus: (params: { id: string; status: number }) => http.post(PORT1 + `/user/change`, params),
	userAdd: (params: User.UserInfo) => http.post(PORT1 + `/user/add`, params),
	userEdit: (params: User.UserInfo) => http.post(PORT1 + `/user/edit`, params),
	userRestPW: (params: User.UserInfo) => http.post(PORT1 + `/user/rest_password`, params),
	userDelete: (params: User.UserInfo) => http.post(PORT1 + `/user/delete`, params),
};
