<template>
	<n-card title="工作台" :bordered="false">
		<n-grid item-responsive responsive="screen" cols="12">
			<n-grid-item span="12 m:6 l:6">
				<div class="flex items-center">
					<div>
						<n-avatar circle :size="64" :src="schoolboy" />
					</div>
					<div>
						<p class="px-4 text-xl">早安，Ah jung，开始您一天的工作吧！</p>
						<p class="px-4 text-gray-400">今日阴转大雨，15℃ - 25℃，出门记得带伞哦。</p>
					</div>
				</div>
			</n-grid-item>
			<n-grid-item span="4 m:2 l:2" class="text-right">
				<p class="title">项目数</p>
				<p class="num">16</p>
			</n-grid-item>
			<n-grid-item span="4 m:2 l:2" class="text-right">
				<p class="title">待办</p>
				<p class="num">3/15</p>
			</n-grid-item>
			<n-grid-item span="4 m:2 l:2" class="text-right">
				<p class="title">消息</p>
				<p class="num">35</p>
			</n-grid-item>
		</n-grid>
	</n-card>
</template>

<script setup lang="ts">
import schoolboy from "@/assets/images/schoolboy.png";
</script>

<style lang="scss" scoped>
.text-right {
	.title {
		font-size: 14px;
	}
	.num {
		font-size: 24px;
	}
}
</style>
