<template>
	<div class="age-ratio">
		<div ref="echartsRef" class="echarts"></div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { randomNum } from '@/utils/util';
// js 获取当前日期到之后一个月30天的日期区间
const initDate = (): string[] => {
	let dateList = [];
	let startDate = new Date();
	let endDate = new Date();
	endDate.setDate(startDate.getDate() + 30);
	startDate.setDate(startDate.getDate() + 1);
	while (endDate.getTime() - startDate.getTime() >= 0) {
		let month =
			(startDate.getMonth() + 1).toString().length === 1 ? '0' + (startDate.getMonth() + 1).toString() : startDate.getMonth() + 1;
		let day = startDate.getDate().toString().length === 1 ? '0' + startDate.getDate() : startDate.getDate();
		dateList.push(month + '/' + day);
		startDate.setDate(startDate.getDate() + 1);
	}
	return dateList;
};
const echartsRef = ref();
const option = {
	tooltip: {
		trigger: 'axis',
		confine: true,
		formatter: (params: any) => {
			let tipData = params[0];
			let html = `<div class="lineChart-bg">
                        <span style="">${tipData.name} <i >${tipData.value}</i> 人次访问</span>
                    </div>`;
			return html;
		},
		backgroundColor: 'transparent', //提示标签背景颜色
		borderColor: 'transparent',
		axisPointer: {
			lineStyle: {
				type: 'dashed',
			},
			snap: true,
		},
		extraCssText: 'box-shadow: none;padding:0',
	},
	legend: {
		show: false,
	},
	grid: {
		top: '15%',
		left: '5%',
		right: '0%',
		bottom: '15%',
	},
	xAxis: [
		{
			type: 'category',
			axisLine: {
				lineStyle: {
					color: '#494e54',
				},
			},
			axisLabel: {
				color: '#d9d9d9',
			},
			splitLine: {
				show: false,
			},
			boundaryGap: false,
			data: initDate(),
		},
	],
	yAxis: [
		{
			type: 'value',
			name: '访问量',
			nameTextStyle: {
				color: '#b9bec6',
				fontSize: 12,
			},
			axisLine: {
				lineStyle: {
					color: '#494e54',
					fontSize: 14,
				},
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#2d3b47',
				},
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#d9d9d9',
				},
				formatter: function (value: string) {
					if (Number(value) >= 10000) {
						value = Number(value) / 10000 + 'w';
					}
					return value;
				},
			},
		},
	],
	series: [
		{
			name: '抛物线',
			type: 'line',
			data: new Array(30).fill('').map(val => {
				val = randomNum(1, 20000);
				return val;
			}),
			smooth: true,
			symbol: 'none',
			itemStyle: {
				borderWidth: 2,
				normal: {
					lineStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: 'rgba(39, 222, 172, 1)',
							},
							{
								offset: 0.5,
								color: 'rgba(39, 222, 172, 0.7)',
							},
							{
								offset: 1,
								color: 'rgba(39, 222, 172,0)',
							},
						]),
					},
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: 'rgba(39, 222, 172, 0.9)',
							},
							{
								offset: 0.4,
								color: 'rgba(39, 222, 172, 0.5)',
							},
							{
								offset: 1,
								color: 'rgba(39, 222, 172, 0)',
							},
						]),
					},
				},
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
.age-ratio {
	height: 100%;
	.echarts {
		height: 100%;
		:deep(.lineChart-bg) {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			width: 180px;
			height: 60px;
			padding-left: 20px;
			background: url('../images/line-bg.png') no-repeat;
			background-size: 100% 100%;
			span {
				font-size: 12px;
				color: rgb(255 255 255 / 80%);
				i {
					font-style: normal;
					color: #f5b348;
				}
			}
		}
	}
}
</style>
