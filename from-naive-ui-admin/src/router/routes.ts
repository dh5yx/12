import type { RouteRecordRaw } from "vue-router";

type routerArrayType = Array<RouteRecordRaw>;

// * 路由模块集合
const modules: any = import.meta.globEager("./modules/*.ts");

// * 路由模块集合
const routerArray: routerArrayType = Object.keys(modules)
  .reduce((a: routerArrayType, b: string) => a.concat(modules[b].default), [])
  .sort((a: any, b: any) => {
    return (a.meta ? a.meta.sort : 0) - (b.meta ? b.meta.sort : 0);
  });
console.log(routerArray);

export default routerArray;
