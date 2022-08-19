export default {
  path: "/result",
  redirect: "/result/info",
  component: () => import("@/layout/index.vue"),
  meta: {
    sort: 6,
    title: "结果页面",
    icon: "CheckCircleOutlined",
  },
  children: [
    {
      path: "/result/info",
      component: () => import("@/views/result/info.vue"),
      meta: {
        title: "信息页",
      },
    },
    {
      path: "/result/fail",
      component: () => import("@/views/result/fail.vue"),
      meta: {
        title: "失败页",
      },
    },
    {
      path: "/result/success",
      component: () => import("@/views/result/success.vue"),
      meta: {
        title: "成功页",
      },
    },
  ],
};
