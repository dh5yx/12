<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 15:46:53
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:24:21
-->
<template>
	<div class="content-box">
		<span class="text">防抖指令 🍇🍇🍇🍓🍓🍓</span>
		<div class="box-content">
			<el-button type="primary" v-debounce:500.click="debounceClick">防抖按钮 (0.5秒后执行)</el-button>
			<el-button type="primary" v-debounce:2000.click="debounceClick">防抖按钮 (2秒后执行)</el-button>
			<el-button type="primary" v-debounce:5000.click="debounceClick">防抖按钮 (5秒后执行)</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

const debounceClick = () => {
	ElMessage.success('我是防抖按钮触发的事件 🍍🍓🍌');
};
</script>

<style scoped lang="scss"></style>
