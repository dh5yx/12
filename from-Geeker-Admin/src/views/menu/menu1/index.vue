<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-25 17:10:44
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 16:13:50
-->
<template>
	<div>
		菜单1

		<el-input v-model="value"></el-input>
	</div>
</template>

<script setup lang="ts" name="Menu1">
import { ref } from "vue";
const value = ref<string>();
</script>

<style scoped></style>
