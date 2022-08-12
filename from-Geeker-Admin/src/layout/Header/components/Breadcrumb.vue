<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 14:55:23
 * @LastEditors: dh
 * @LastEditTime: 2022-08-10 15:32:23
-->
<template>
	<el-breadcrumb separator="/">
		<transition-group name="breadcrumb">
			<el-breadcrumb-item :to="{ path: '/' }" key="/home">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="item in breadcrumb" :key="item.path" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const breadcrumb = computed(() => route.matched.filter(v => v.meta && v.meta.title && v.meta.title !== "首页"));
</script>

<style lang="scss" scoped></style>
