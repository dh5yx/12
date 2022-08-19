export default {
  path: "/table",
  redirect: "/table/console",
  component: () => import("@/layout/index.vue"),
  meta: {
    sort: 3,
    title: "列表页面",
    icon: "TableOutlined",
  },
  children: [
    {
      path: "/table/console",
      component: () => import("@/views/table/basic/index.vue"),
      meta: {
        title: "基础列表",
      },
    },
  ],
};
