export default {
  path: "/external",
  component: () => import("@/views/docs/index.vue"),
  meta: {
    title: "项目文档",
    sort: 10,
    url: "https://naive-ui-admin-docs.vercel.app",
    icon: "DocumentTextOutline",
  },
};
