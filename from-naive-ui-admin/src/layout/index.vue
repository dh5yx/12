<template>
  <n-layout class="layout" has-sider>
    <n-layout-sider
      :width="menuSetting.menuWidth"
      :inverted="true"
      :native-scrollbar="false"
    >
      <Menu />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script lang="ts">
import Menu from "./components/menu/index.vue";
export default {
  components: { Menu },
};
</script>
<script setup lang="ts">
// import Menu from "./components/menu/index.vue";
import useLayoutSetting from "@/hook/useLayoutSetting";

const { menuSetting } = useLayoutSetting();
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
</style>
