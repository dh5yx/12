<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-28 16:32:16
 * @LastEditors: dh
 * @LastEditTime: 2022-08-01 13:47:10
-->
<template>
  <div ref="echartsRef" class="echarts"></div>
</template>

<script setup lang="ts">
import useEcharts from "@/hooks/useEcharts";
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import { option } from "./options";

const echartsRef = ref<HTMLElement>();

onMounted(() => {
  const myChart = echarts.init(echartsRef.value as HTMLElement);
  const options: echarts.EChartsCoreOption = option;
  useEcharts(myChart, options);
});
</script>

<style scoped>
.echarts {
  height: 100%;
}
</style>
