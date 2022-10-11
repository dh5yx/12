<template>
	<div ref="chartRef2" style="width: 100%; height: 400px"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { option2 } from "./config";
import useEcharts from "@/hook/useEcharts";
import * as echarts from "echarts";

const chartRef2 = ref<HTMLDivElement>();

onMounted(() => {
	const myCharts2 = echarts.init(chartRef2.value as HTMLDivElement);
	useEcharts(myCharts2, option2);
});
</script>

<style scoped></style>
