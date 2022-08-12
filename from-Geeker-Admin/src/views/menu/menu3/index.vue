<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 17:10:44
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 16:12:34
-->
<template>
	<div>
		菜单3

		<el-input v-model="value"></el-input>
	</div>
</template>

<script setup lang="ts" name="Menu3">
import { ref } from "vue";
const value = ref<string>();
</script>

<style scoped></style>
