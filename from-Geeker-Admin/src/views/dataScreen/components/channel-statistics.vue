<template>
	<!-- 平台来源 -->
	<div class="echarts" ref="echartsRef"></div>
</template>

<script setup lang="ts">
// Echarts 为init（dom元素后的类型）
// EChartsOption 为 option 的类型
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const echartsRef = ref();

let platFromData = [
	{
		value: 40,
		name: "智慧文旅平台",
		percentage: "40%",
	},
	{
		value: 10,
		name: "携程",
		percentage: "10%",
	},
	{
		value: 20,
		name: "飞猪",
		percentage: "20%",
	},
	{
		value: 30,
		name: "其他渠道",
		percentage: "30%",
	},
];

const option = {
	grid: {
		top: "0%",
		left: "2%",
		right: "2%",
		bottom: "0%",
		// containLabel: true
	},
	tooltip: {
		trigger: "item",
		formatter: "{b} :  {c}人",
	},
	legend: {
		show: true,
		top: "middle",
		left: "20px",
		icon: "circle",
		orient: "vertical",
		align: "auto",
		itemWidth: 10,
		textStyle: {
			color: "#fff",
		},
		itemGap: 20,
		formatter: function (name: string) {
			let text = "";
			platFromData.forEach(val => {
				if (val.name === name) {
					text = name + " --- " + val.percentage;
				}
			});
			return text;
		},
		data: platFromData.map(val => val.name),
	},
	series: [
		{
			type: "pie",
			radius: ["60%", "85%"],
			center: ["68%", "45%"],
			color: ["#0E7CE2", "#FF8352", "#E271DE", "#F8456B", "#00FFFF", "#4AEAB0"],
			itemStyle: {
				borderColor: "#031845",
				borderWidth: 10,
			},
			data: platFromData,
			labelLine: {
				show: false,
			},
			label: {
				show: false,
			},
		},
		{
			type: "pie",
			radius: ["20%", "28%"],
			center: ["68%", "45%"],
			color: ["#ffffff", "red"],
			startAngle: 105,
			data: [
				{
					value: 30,
					name: "",
					itemStyle: {
						color: "transparent",
					},
				},
				{
					value: 5,
					name: "",
					itemStyle: {
						color: "transparent",
					},
				},
				{
					value: 65,
					name: "ddd",
					itemStyle: {
						color: "#ffffff",
					},
				},
			],
			silent: true,
			labelLine: {
				show: false,
			},
			label: {
				show: false,
			},
		},
		{
			type: "pie",
			radius: [0, "30%"],
			center: ["68%", "45%"],
			startAngle: 90,
			data: [
				{
					value: 25,
					name: "1",
					itemStyle: {
						color: "transparent",
						borderWidth: 4,
						borderColor: "#ffffff",
					},
				},

				{
					value: 75,
					name: "2",
					itemStyle: {
						color: "transparent",
					},
				},
			],
			selectedOffset: 10,
			silent: true,
			labelLine: {
				show: false,
			},
			label: {
				show: false,
			},
		},
	],
};

onMounted(() => {
	const myEcharts = echarts.init(echartsRef.value as HTMLElement);
	myEcharts.setOption(option);
});
</script>
<style lang="scss" scoped>
.echarts {
	width: 100%;
	height: 100%;
}
</style>
