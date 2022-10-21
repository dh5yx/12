<template>
	<div class="age-ratio">
		<div ref="echartsRef" class="echarts"></div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const echartsRef = ref();

const scaleData = [
	{
		value: 200,
		name: '10岁以下',
		percentage: '16%',
	},
	{
		value: 110,
		name: '10 - 18岁',
		percentage: '8%',
	},
	{
		value: 150,
		name: '18 - 30岁',
		percentage: '12%',
	},
	{
		value: 310,
		name: '30 - 40岁',
		percentage: '24%',
	},
	{
		value: 250,
		name: '40 - 60岁',
		percentage: '20%',
	},
	{
		value: 260,
		name: '60岁以上',
		percentage: '20%',
	},
];
const placeHolderStyle = {
	label: {
		show: false,
	},
	labelLine: {
		show: false,
	},
	color: 'rgba(0, 0, 0, 0)',
	borderColor: 'rgba(0, 0, 0, 0)',
	borderWidth: 0,
};
const data: Array<any> = [];
// const color = ["#00ffff", "#00cfff", "#006ced", "#ffe000", "#ffa800", "#ff5b00", "#ff3000"];
for (let i = 0; i < scaleData.length; i++) {
	data.push(
		{
			value: scaleData[i].value,
			name: scaleData[i].name,
			itemStyle: {
				borderWidth: 4,
				shadowBlur: 200,
				// borderColor: color[i],
				// shadowColor: color[i],
			},
		},
		{
			value: 2,
			name: '',
			itemStyle: placeHolderStyle,
		}
	);
}
const option = {
	tooltip: {
		show: true,
		trigger: 'item',
		formatter: '{b} <br/>占比：{c}%',
	},
	legend: {
		top: '5%',
		right: '5%',
		textStyle: {
			color: '#fff',
		},
		formatter: function (name: string) {
			return name + '   ' + scaleData.find((val: any) => val.name === name).percentage;
		},
	},
	toolbox: {
		show: false,
	},
	series: [
		{
			type: 'pie',
			clockWise: false,
			radius: ['50%', '70%'],
			center: ['40%', '50%'],
			labelLine: {
				show: false,
			},
			label: {
				show: false,
			},
			data: data,
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
	}
}
</style>
