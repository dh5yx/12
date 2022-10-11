<template>
	<div ref="chartRef1" style="width: 100%; height: 400px"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { option1 } from "./config";
import useEcharts from "@/hook/useEcharts";
import * as echarts from "echarts";

const chartRef1 = ref<HTMLDivElement>();

onMounted(() => {
	const myCharts1 = echarts.init(chartRef1.value as HTMLDivElement);
	useEcharts(myCharts1, option1);
});
</script>

<style scoped></style>
