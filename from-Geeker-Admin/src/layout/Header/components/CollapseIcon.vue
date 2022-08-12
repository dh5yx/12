<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 14:55:23
 * @LastEditors: dh
 * @LastEditTime: 2022-07-21 15:21:32
-->
<template>
  <el-icon class="collapse-icon" @click="setCollapse">
    <Expand />
  </el-icon>
</template>

<script setup lang="ts">
import { Expand } from "@element-plus/icons-vue";
import { GlobalStore } from "@/stores/index";
const setCollapse = GlobalStore().setCollapse;
</script>

<style lang="scss" scoped>
.collapse-icon {
  font-size: 22px;
  cursor: pointer;
}
</style>
