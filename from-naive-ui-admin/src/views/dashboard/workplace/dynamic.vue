<template>
	<n-card :segmented="{ content: true }" content-style="padding-top: 0;padding-bottom: 0;" :bordered="false" size="small" title="动态">
		<template #header-extra><a href="javascript:;">更多</a></template>
		<n-list>
			<n-list-item v-for="item in list" :key="item.title">
				<template #prefix>
					<n-avatar circle :size="40" :src="item.avatar" />
				</template>
				<n-thing :title="item.title">
					<template #description>
						<p class="text-xs text-gray-500">{{ item.time }}</p>
					</template>
				</n-thing>
			</n-list-item>
		</n-list>
	</n-card>
</template>

<script setup lang="ts">
import schoolboy from '@/assets/images/schoolboy.png';
import { ref } from 'vue';

interface ListItem {
	title: string;
	avatar: string;
	time: string;
}
const list = ref<Array<ListItem>>([
	{
		title: 'Ah Jung 刚才把工作台页面随便写了一些，凑合能看了！',
		avatar: schoolboy,
		time: '2021-07-04 22:37:16',
	},
	{
		title: 'Ah Jung 在 开源组 创建了项目 naive-ui-admin？',
		avatar: schoolboy,
		time: '2021-07-04 09:37:16',
	},
	{
		title: '@It界风清扬，向naive-ui-admin提交了一个bug，抽时间看看吧！',
		avatar: schoolboy,
		time: '2021-07-04 22:37:16',
	},
	{
		title: '技术部那几位童鞋，再次警告，不要摸鱼，不要摸鱼，不要摸鱼啦！',
		avatar: schoolboy,
		time: '2021-07-04 09:37:16',
	},
	{
		title: '上班不摸鱼，和咸鱼有什么区别（这话真不是我说的哈）！',
		avatar: schoolboy,
		time: '2021-07-04 20:37:16',
	},
]);
</script>

<style lang="scss" scoped></style>
