<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 15:46:53
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:24:27
-->
<template>
	<div class="content-box">
		<span class="text">节流指令 🍇🍇🍇🍓🍓🍓</span>
		<div class="box-content" style="margin-top: 200px">
			<el-button type="primary" v-throttle:1000.click="debounceClick">节流按钮 (1秒后执行)</el-button>
			<el-button type="primary" v-throttle:2000.click="debounceClick">节流按钮 (2秒后执行)</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

const debounceClick = () => {
	ElMessage.success("我是节流按钮触发的事件 🍍🍓🍌");
};
</script>

<style scoped lang="scss"></style>
