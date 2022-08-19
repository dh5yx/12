<template>
  <n-menu
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :inverted="true"
    :indent="30"
    :value="selectedKeys"
    :on-update:value="changeMenu"
  />
</template>
<script setup lang="ts">
// import { AccountBookFilled } from "@vicons/antd";
import { NButton, NIcon } from "naive-ui";
import routerArray from "@/router/routes";
import { useRouter, useRoute } from "vue-router";
import { ref, computed, h, resolveComponent } from "vue";
import type { RouteRecordRaw } from "vue-router";
import type { MenuOption } from "naive-ui";

const route = useRoute();
const router = useRouter();

const menuOptions = ref<MenuOption[]>([]);
const selectedKeys = computed(() => route.fullPath);

function renderIcon(icon: string) {
  // 方式一 h(组件)
  // return () => h(NIcon, null, { default: () => h(icon) });

  // 方式二 h(resolveComponent(组件名))
  return () => h(resolveComponent(icon || ""));
}

// * 根据路由过滤为菜单
const filterMenu = (route: Array<RouteRecordRaw & RouteItem>): any => {
  return route.map((v) => {
    if (v.children && v.children.length) {
      if (!v.meta!.root) {
        v.children = filterMenu(v.children);
      } else {
        v.meta = v.children[0].meta;
        delete v.children;
      }
    }
    return {
      label: v.meta && v.meta.title,
      // icon: v.meta?.icon,
      icon: v.meta?.icon ? renderIcon(v.meta?.icon as string) : null,
      key: v.path,
      children: v.children as any,
    };
  });
};

// * 点击惨淡跳转路由
const changeMenu = (path: string) => {
  router.push(path);
};

menuOptions.value = filterMenu(routerArray);
</script>

<style scoped></style>
