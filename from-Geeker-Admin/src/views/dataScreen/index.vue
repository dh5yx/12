<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-08-08 10:40:08
 * @LastEditors: dh
 * @LastEditTime: 2022-08-09 10:21:41
-->
<template>
	<div class="dataScreen-container">
		<div class="dataScreen" ref="dataScreenRef">
			<div class="header">
				<div class="header-left">
					<span class="header-screening" @click="handleTo">首页</span>
				</div>
				<div class="header-center">
					<div class="header-center-title">智慧旅游可视化大数据展示平台</div>
					<div class="header-center-warning">平台高峰预警信息（2条）</div>
				</div>
				<div class="header-right">
					<span class="header-download">统计报告</span>
					<span class="header-time">当前时间：{{ time }}</span>
				</div>
			</div>
			<div class="main">
				<div class="main-left">
					<div class="main-left-top bg">
						<BaseBox title="实时游客统计">
							<template #tip>
								<div>可预约总量 <span style="color: #ff8100">999999</span> 人</div>
							</template>
							<template #default>
								<visitorStatistics />
							</template>
						</BaseBox>
					</div>
					<div class="main-left-middle bg">
						<BaseBox title="男女比例">
							<RealTimeVisitor />
						</BaseBox>
					</div>
					<div class="main-left-bottom bg">
						<BaseBox title="年龄比例">
							<AgeRatio />
						</BaseBox>
					</div>
				</div>
				<div class="main-center">
					<div class="main-center-top">
						<MapEcharts ref="mapEchartsRef" />
					</div>
					<div class="main-center-bottom bg">
						<BaseBox title="未来30天游客量趋势图">
							<FutureTrends />
						</BaseBox>
					</div>
				</div>
				<div class="main-right">
					<div class="main-right-top bg">
						<BaseBox title="热门景区排行">
							<TopRanking />
						</BaseBox>
					</div>
					<div class="main-right-middle bg">
						<BaseBox title="年度游客量对比">
							<YearComparison />
						</BaseBox>
					</div>
					<div class="main-right-bottom bg">
						<BaseBox title="预约渠道数据统计">
							<ChannelStatistics />
						</BaseBox>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import BaseBox from './components/base-box.vue';
import MapEcharts from './components/map-echarts.vue';
import visitorStatistics from './components/visitor-statistics.vue';
import RealTimeVisitor from './components/real-time-visitor.vue';
import AgeRatio from './components/age-ratio.vue';
import FutureTrends from './components/future-trends.vue';
import TopRanking from './components/top-ranking.vue';
import YearComparison from './components/year-comparison.vue';
import ChannelStatistics from './components/channel-statistics.vue';
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDateFormat, useNow } from '@vueuse/core';

const router = useRouter();
const dataScreenRef = ref();
const mapEchartsRef = ref();
const time = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
const planHeight = ref<string>('1080px');
const planWidth = ref<string>('1920px');
const scale = ref<number>(1);
const transform = computed(() => {
	return ` translate(-50%,-50%) scale(${scale.value})`;
});

const handleTo = (): void => {
	router.push('/');
};

const sizeChange = () => {
	const relPageHeight = document.body.clientHeight;
	const relPageWidth = document.body.clientWidth;
	scale.value = Math.min(relPageHeight / parseInt(planHeight.value), relPageWidth / parseInt(planWidth.value));
};

onMounted(() => {
	sizeChange();
	window.onresize = sizeChange;
});
</script>
<style lang="scss" scoped>
@import './index.scss';
.dataScreen {
	transform: v-bind(transform);
	height: v-bind(planHeight);
	width: v-bind(planWidth);
	transition: all 0.3s;
	position: fixed;
	top: 50%;
	left: 50%;
}
</style>
