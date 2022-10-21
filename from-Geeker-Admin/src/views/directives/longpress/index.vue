<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 17:16:43
 * @LastEditors: dh
 * @LastEditTime: 2022-08-17 14:34:47
-->
<template>
	<div class="content-box">
		<span class="text">长按指令 🍇🍇🍇🍓🍓🍓</span>
		<div class="box-content">
			<el-button type="primary" v-longpress:1000="longpress">长按1秒触发事件</el-button>
			<el-button type="primary" v-longpress:2000="longpress">长按2秒触发事件</el-button>
			<el-button type="primary" v-longpress:3000="longpress">长按3秒触发事件</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
const longpress = () => {
	ElMessage.success('长按事件触发成功 🎉🎉🎉');
};
</script>

<style scoped lang="scss"></style>
