<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 14:55:23
 * @LastEditors: dh
 * @LastEditTime: 2022-08-16 10:06:59
-->
<template>
	<el-icon class="collapse-icon" @click="setCollapse">
		<Expand />
	</el-icon>
</template>

<script setup lang="ts">
import { Expand } from "@element-plus/icons-vue";
import { useGlobalStore } from "@/stores/index";
const setCollapse = useGlobalStore().setCollapse;
</script>

<style lang="scss" scoped>
.collapse-icon {
	font-size: 22px;
	cursor: pointer;
}
</style>
