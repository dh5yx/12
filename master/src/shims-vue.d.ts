/*
 * @Description:
 * @Author: dh
 * @Date: 2022-06-08 16:50:54
 * @LastEditors: dh
 * @LastEditTime: 2022-07-20 10:22:31
 */
declare module '*.vue' {
    import { DefineComponent } from 'vue';

    const component: DefineComponent<{}, {}, any>;
    export default component;
}
