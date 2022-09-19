<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-01 13:37:25
 * @LastEditors: dh
 * @LastEditTime: 2022-08-30 09:30:15
-->
<template>
	<div ref="echartsRef" class="echarts"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import useEcharts from "@/hooks/useEcharts";
import { ref, onMounted } from "vue";
import { option } from "./options";

const echartsRef = ref<HTMLElement>();

onMounted(() => {
	const myEcharts = echarts.init(echartsRef.value as HTMLElement);
	useEcharts(myEcharts, option);
});
</script>

<style scoped>
.echarts {
	height: 100%;
}
</style>
