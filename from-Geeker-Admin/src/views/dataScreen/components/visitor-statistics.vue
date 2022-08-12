<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-09 09:39:48
 * @LastEditors: dh
 * @LastEditTime: 2022-08-09 15:26:29
-->
<template>
	<div class="visitor-statistics">
		<div class="total">
			<div class="total-item" v-for="item in realTotal" :key="item">{{ item }}</div>
			<div class="total-item">人</div>
		</div>
		<div ref="echartsRef" class="echarts"></div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import "echarts-liquidfill";

const realTotal = ref<string>("216908");
const echartsRef = ref();
const option = {
	title: [
		{
			text: (0.5 * 100).toFixed(0) + "%",
			left: "49%",
			top: "35%",
			textAlign: "center",
			textStyle: {
				fontSize: "14",
				fontWeight: "normal",
				color: "#ffffff",
				align: "center",
				textBorderColor: "rgba(0, 0, 0, 0)",
				textShadowColor: "#000",
				textShadowBlur: 0,
				textShadowOffsetX: 0,
				textShadowOffsetY: 1,
			},
		},
		{
			text: "预约量",
			left: "49%",
			top: "25%",
			textAlign: "center",
			textStyle: {
				fontSize: "15",
				fontWeight: "normal",
				color: "#ffffff",
				align: "center",
				textBorderColor: "rgba(0, 0, 0, 0)",
				textShadowColor: "#000",
				textShadowBlur: 0,
				textShadowOffsetX: 0,
				textShadowOffsetY: 1,
			},
		},
	],
	grid: {
		top: "0",
		left: "0px",
		right: "0px",
		bottom: "0",
		containLabel: true,
	},
	polar: {
		radius: ["75%", "85%"],
		center: ["50%", "50%"],
	},
	angleAxis: {
		max: 120,
		clockwise: false,
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
		axisLabel: {
			show: false,
		},
		splitLine: {
			show: false,
		},
		startAngle: 188,
	},
	radiusAxis: {
		type: "category",
		show: true,
		axisLabel: {
			show: false,
		},
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
	},
	series: [
		{
			type: "liquidFill",
			radius: "70%",
			z: 2,
			center: ["50%", "50%"],
			data: [0.4, 0.4, 0.4], // data个数代表波浪数
			itemStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [
						{
							offset: 0,
							color: "#35FAB6", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "rgba(40, 209, 247,0.3)", // 100% 处的颜色
						},
					],
					global: false, // 缺省为 false
				},
			},
			outline: {
				borderDistance: 0,
				itemStyle: {
					borderWidth: 2,
					borderColor: "#31d8d5",
					shadowBlur: 20,
					shadowColor: "#50c1a7",
				},
			},
			label: {
				show: false,
			},
			backgroundStyle: {
				borderWidth: 1,
				// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
				color: {
					type: "radial",
					x: 0.5,
					y: 0.5,
					r: 0.5,
					colorStops: [
						{
							offset: 0,
							color: "#0D2648", // 0% 处的颜色
						},
						{
							offset: 0.8,
							color: "#0D2648", // 100% 处的颜色
						},
						{
							offset: 1,
							color: "#228E7D", // 100% 处的颜色
						},
					],
					global: false, // 缺省为 false
				},
			},
		},
		// 外圈虚线
		{
			type: "pie",
			radius: ["80%", "80%"],
			center: ["50%", "50%"],
			z: 1,
			label: {
				show: false,
			},
			silent: true,
			itemStyle: {
				borderWidth: 2,
				borderType: [8, 10],
				borderDashOffset: 15,
				borderColor: "#31d8d5",
				color: "#11144e",
				borderCap: "round",
			},
			data: [100],
		},
		// 外圈实线
		{
			type: "bar",
			data: [55],
			z: 10,
			coordinateSystem: "polar",
			roundCap: true,
			color: "#31d8d5",
		},
	],
};

onMounted(() => {
	const myEcharts = echarts.init(echartsRef.value as HTMLElement);

	myEcharts.setOption(option);
});
</script>

<style lang="scss" scoped>
.visitor-statistics {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.total {
	padding: 0 20px;
	margin-top: 10px;
	display: flex;
	&-item {
		flex: 1;
		text-align: center;
		height: 50px;
		line-height: 50px;
		font-family: MetroDF;
		font-size: 30px;
		background: url("../images/total.png") no-repeat;
		background-size: 100% 100%;
	}
}
.echarts {
	flex: 1;
	height: 0;
	width: 100%;
}
</style>
