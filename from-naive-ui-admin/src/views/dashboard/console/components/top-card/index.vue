<template>
	<n-grid x-gap="12" y-gap="12" cols="1 s:2 m:3 l:4 xl:4 2xl:4" responsive="screen">
		<n-grid-item v-for="item in consoleInfo" :key="item.title">
			<n-card size="small" :title="item.title" hoverable>
				<template #header-extra>
					<n-tag :type="item.type"> {{ item.cycle }} </n-tag>
				</template>
				<div style="height: 100px">
					<div class="total">{{ item.number }}</div>
					<div class="percentage">
						<div v-if="item.tip1" class="flex-box">
							<div>
								<span>{{ item.tip1 + ' ' + item.rise }}</span>
								<n-icon size="12" color="#00ff6f">
									<CaretUpOutlined />
								</n-icon>
							</div>
							<div>
								<span>{{ item.tip2 + ' ' + item.decline }}</span>
								<n-icon size="12" color="#ffde66">
									<CaretDownOutlined />
								</n-icon>
							</div>
						</div>
						<n-progress v-else type="line" :percentage="item.degree" :indicator-placement="'inside'" processing />
					</div>
				</div>
				<template #footer>
					<div class="amount">
						<span>{{ item.msg }}：</span>
						<span>{{ item.amount }}</span>
					</div>
				</template>
			</n-card>
		</n-grid-item>
	</n-grid>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import api from '@/api/index';

const consoleInfo = reactive<any>({
	visits: { tip1: '日同比', tip2: '周同比', msg: '总访问量', uni: '', cycle: '日', showProgress: false, type: 'success' },
	saleroom: { tip1: '', tip2: '', msg: '总销售额', uni: '￥', cycle: '周', showProgress: true, type: 'info' },
	orderLarge: { tip1: '日同比', tip2: '周同比', msg: '转化率', uni: '', cycle: '周', showProgress: false, type: 'warning' },
	volume: { tip1: '月同比', tip2: '月同比', msg: '总成交额', uni: '￥', cycle: '月', showProgress: false, type: 'error' },
});

onMounted(async () => {
	const { data, code } = await api.getConsoleInfo();
	const { visits, saleroom, orderLarge, volume } = data || {};
	if (code === 200) {
		Object.assign(consoleInfo.visits, visits);
		Object.assign(consoleInfo.saleroom, saleroom);
		Object.assign(consoleInfo.orderLarge, orderLarge);
		Object.assign(consoleInfo.volume, volume);
	}
});
</script>

<style lang="scss" scoped>
.total {
	font-size: 24px;
	line-height: 2;
}
.percentage {
	margin: 10px 0;
}
.amount {
	display: flex;
	justify-content: space-between;
	font-size: 13px;
}
.flex-box {
	display: flex;
	line-height: 2;
	justify-content: space-between;
	align-items: center;
}
</style>
