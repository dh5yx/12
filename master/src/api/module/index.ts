/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 14:22:41
 * @LastEditors: dh
 * @LastEditTime: 2022-08-15 09:51:45
 */
import request from '@/utils/axios';

/**
 * 登录
 */
// interface IResponseType<P = {}> {
//     code?: number;
//     status: number;
//     msg: string;
//     data: P;
// }
// interface ILogin {
//     token: string;
//     expires: number;
// }
export const login = (username: string, password: string) => {
    return request({
        url: '/api/auth/login',
        method: 'post',
        data: {
            username,
            password,
        },
    });
};

export default {};
