<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-09 09:39:48
 * @LastEditors: dh
 * @LastEditTime: 2022-08-09 15:40:58
-->
<template>
	<div class="real-time-visitor">
		<div class="gender">
			<div class="gender-item boy">
				<div>男士</div>
				<img src="../images/man.png" alt="" />
			</div>

			<div class="gender-item girl">
				<div>女士</div>
				<img src="../images/woman.png" alt="" />
			</div>
		</div>
		<div ref="echartsRef" class="echarts"></div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const echartsRef = ref();

const echartsData = [
	{ name: "男士", data: [40] },
	{ name: "女士", data: [60] },
];

const option = {
	grid: {
		containLabel: true,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	tooltip: {
		show: true,
		trigger: "item",
		formatter: "{a} <br/>占比：{c}%",
	},
	legend: {
		show: false,
	},
	xAxis: {
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
		splitLine: {
			show: false,
		},
		axisLabel: {
			show: false,
		},
	},
	yAxis: {
		data: ["sss"],
		axisLabel: {
			show: false,
		},
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
		splitLine: {
			show: false,
		},
	},
	color: ["#5292FD", "#EF6B6E"],
	series: [] as any,
};

echartsData.forEach(item => {
	option.series.push({
		type: "bar",
		name: item.name,
		stack: "1",
		label: {
			show: true,
			position: [5, 5],
			formatter: item.name + item.data + "%",
			color: "#fff",
			offset: [0, -20],
		},
		barWidth: 26,
		data: item.data,
		itemStyle: {
			color: "#007AFE",
			normal: {
				barBorderRadius: [0],
			},
		},
	});
});
onMounted(() => {
	const myEcharts = echarts.init(echartsRef.value as HTMLElement);

	myEcharts.setOption(option);
});
</script>

<style lang="scss" scoped>
.real-time-visitor {
	height: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 30px 60px 20px;
}
.gender {
	display: flex;
	justify-content: space-between;
	height: 115px;
	&-item {
		width: 110px;
		text-align: center;
		color: #ffffff;
		font-size: 12px;
	}
	.boy {
		background: url("../images/man-bg.png") no-repeat;
	}
	.girl {
		background: url("../images/woman-bg.png") no-repeat;
	}
	img {
		margin-top: 20px;
	}
}
.echarts {
	flex: 1;
	height: 0;
	width: 100%;
	margin-top: 20px;
}
</style>
