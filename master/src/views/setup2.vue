<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 11:14:48
 * @LastEditors: dh
 * @LastEditTime: 2022-10-21 13:41:51
-->
<template>
	<h2>setup</h2>
	<div>{{ num }}</div>
	<button @click="add(1)">增加</button>
	<button @click="add(-1)">减少</button>
	<button @click="changeColor" class="text">改变颜色</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(0);
const color = ref('red');

function add(n: number): void {
	num.value += n;
}

function changeColor() {
	let hex = Math.floor(Math.random() * 16777216).toString(16); // 生成ffffff以内16进制数
	while (hex.length < 6) {
		// while循环判断hex位数，少于6位前面加0凑够6位
		hex = `0${hex}`;
	}
	color.value = `#${hex}`;
}
</script>

<style scoped>
.text {
	color: v-bind(color);
}
</style>
