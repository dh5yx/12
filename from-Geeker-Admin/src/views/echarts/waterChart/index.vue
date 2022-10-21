<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-01 13:37:25
 * @LastEditors: dh
 * @LastEditTime: 2022-08-09 10:44:50
-->
<template>
	<div ref="echartsRef" class="echarts"></div>
</template>

<script setup lang="ts">
import useEcharts from '@/hooks/useEcharts';
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import { ref, onMounted } from 'vue';
import { option } from './options';

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
