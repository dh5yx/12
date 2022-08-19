export default {
  path: "/comp",
  redirect: "/comp/upload",
  component: () => import("@/layout/index.vue"),
  meta: {
    sort: 8,
    title: "组件实列",
    icon: "WalletOutlined",
  },
  children: [
    {
      path: "/comp/table",
      meta: {
        title: "表格",
      },
      children: [
        {
          path: "/comp/table/basic",
          component: () => import("@/views/comp/table/basic/index.vue"),
          meta: {
            title: "基础表格",
            icon: "DocumentTextOutline",
          },
        },
        {
          path: "/comp/table/editCell",
          component: () => import("@/views/comp/table/editCell/index.vue"),
          meta: {
            title: "单元格编辑",
            icon: "DocumentTextOutline",
          },
        },
        {
          path: "/comp/table/editRow",
          component: () => import("@/views/comp/table/editRow/index.vue"),
          meta: {
            title: "整行编辑",
            icon: "DocumentTextOutline",
          },
        },
      ],
    },
    {
      path: "/comp/table/basic",
      component: () => import("@/views/comp/table/basic/index.vue"),
      meta: {
        title: "表单",
      },
      children: [
        {
          path: "/comp/form/basic",
          component: () => import("@/views/comp/form/basic/index.vue"),
          meta: {
            title: "基础使用",
            icon: "DocumentTextOutline",
          },
        },
        {
          path: "/comp/form/useForm",
          component: () => import("@/views/comp/form/useForm/index.vue"),
          meta: {
            title: "useForm",
            icon: "DocumentTextOutline",
          },
        },
      ],
    },
    {
      path: "/comp/upload",
      component: () => import("@/views/comp/upload/index.vue"),
      meta: {
        title: "上传图片",
        icon: "DocumentTextOutline",
      },
    },
    {
      path: "/comp/modal",
      component: () => import("@/views/comp/modal/index.vue"),
      meta: {
        title: "弹窗扩展",
        icon: "DocumentTextOutline",
      },
    },
    {
      path: "/comp/richtext",
      component: () => import("@/views/comp/richtext/index.vue"),
      meta: {
        title: "富文本",
        icon: "DocumentTextOutline",
      },
    },
    {
      path: "/comp/drag",
      component: () => import("@/views/comp/drag/index.vue"),
      meta: {
        title: "拖拽",
        icon: "DocumentTextOutline",
      },
    },
  ],
};
