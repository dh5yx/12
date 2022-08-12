<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 13:45:39
 * @LastEditors: dh
 * @LastEditTime: 2022-07-26 14:36:53
-->
<template>
  <div class="content-box">
    <span class="text">拖拽指令 🍇🍇🍇🍓🍓🍓</span>
    <div class="box-content" v-draggable>我可以拖拽</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box-content {
  background-color: #ccc;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;
  user-select: none;
}
</style>
