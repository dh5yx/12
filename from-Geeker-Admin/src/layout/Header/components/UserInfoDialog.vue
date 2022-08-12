<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 09:28:35
 * @LastEditors: dh
 * @LastEditTime: 2022-07-25 09:58:21
-->
<template>
  <el-dialog v-model="dialogVisible" title="用户信息" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="openDialog">Cancel</el-button>
        <el-button type="primary" @click="openDialog">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dialogVisible = ref<boolean>(false);

const openDialog = function () {
  dialogVisible.value = !dialogVisible.value;
};

defineExpose({ openDialog });
</script>

<style scoped></style>
