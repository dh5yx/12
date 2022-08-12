<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-27 10:50:38
 * @LastEditors: dh
 * @LastEditTime: 2022-07-27 16:18:30
-->
<template>
  <div class="content-box">
    <span class="text">icon选择 🍇🍇🍇🍓🍓🍓</span>
    <SelectIcon v-model:iconValue="iconValue"></SelectIcon>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SelectIcon from "@/components/SelectIcon/index.vue";
const iconValue = ref<string>("");
</script>

<style scoped lang="scss"></style>
