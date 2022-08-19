export default {
  path: "/form",
  redirect: "/form/basic",
  component: () => import("@/layout/index.vue"),
  meta: {
    sort: 5,
    title: "异常页面",
    icon: "ProfileOutlined",
  },
  children: [
    {
      path: "/form/basic",
      component: () => import("@/views/form/basic/index.vue"),
      meta: {
        title: "基础表单",
      },
    },
    {
      path: "/form/detail",
      component: () => import("@/views/form/detail/index.vue"),
      meta: {
        title: "表单详情",
      },
    },
    {
      path: "/form/step",
      component: () => import("@/views/form/step/index.vue"),
      meta: {
        title: "分步表单",
      },
    },
  ],
};
