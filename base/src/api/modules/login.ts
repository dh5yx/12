import request from '@/utils/axios';

interface IResponseType<P = {}> {
	code?: number;
	status: number;
	msg: string;
	data: P;
}
interface ILogin {
	token: string;
	expires: number;
}
export const login = (data: LoginForm) => {
	return request<IResponseType<ILogin>>({
		url: '/api/auth/login',
		method: 'post',
		data,
	});
};
