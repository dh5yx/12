<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-01 14:38:54
 * @LastEditors: dh
 * @LastEditTime: 2022-08-08 16:47:18
-->
<template>
	<div ref="echartsRef" class="echarts"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import useCharts from "@/hooks/useEcharts";
import { option } from "./options";
const echartsRef = ref<HTMLElement>();

onMounted(() => {
	const myEcharts = echarts.init(echartsRef.value as HTMLElement);
	useCharts(myEcharts, option);
});
</script>

<style scoped>
.echarts {
	height: 100%;
}
</style>
