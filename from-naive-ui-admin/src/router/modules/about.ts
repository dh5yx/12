export default {
  path: "/about",
  redirect: "/about/index",
  component: () => import("@/layout/index.vue"),
  meta: {
    sort: 11,
    title: "about",
    root: true,
  },
  children: [
    {
      path: "/about/index",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title: "关于",
        icon: "ProjectOutlined",
      },
    },
  ],
};
