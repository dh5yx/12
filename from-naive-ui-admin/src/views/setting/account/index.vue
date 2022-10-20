<template>
	<n-grid :x-gap="24">
		<n-grid-item span="6">
			<n-card :bordered="false" size="small">
				<n-thing
					class="thing-cell"
					v-for="item in typeTabList"
					:key="item.key"
					:class="{ 'thing-cell-on': type === item.key }"
					@click="type = item.key"
				>
					<template #header>{{ item.name }}</template>
					<template #description>{{ item.desc }}</template>
				</n-thing>
			</n-card>
		</n-grid-item>
		<n-grid-item span="18">
			<n-card :bordered="false" size="small" :title="typeTitle">
				<BasicSetting v-if="type === 1" />
				<SafetySetting v-else-if="type === 2" />
			</n-card>
		</n-grid-item>
	</n-grid>
</template>
<script lang="ts" setup>
import BasicSetting from './BasicSetting.vue';
import SafetySetting from './SafetySetting.vue';
import { ref, computed } from 'vue';
import { useThemeVars } from 'naive-ui';

const typeTabList = [
	{ name: '基本设置', desc: '个人账户信息设置', key: 1 },
	{ name: '安全设置', desc: '密码，邮箱等设置', key: 2 },
];

const themeVars = useThemeVars();

const type = ref(1);

const typeTitle = computed(() => {
	return typeTabList[type.value - 1].name;
});
const accountHoverColor = computed(() => {
	return themeVars.value.primaryColorHover;
});
const accountHoverColor2 = computed(() => {
	return themeVars.value.placeholderColor;
});
const accountActiveColor = computed(() => {
	return themeVars.value.primaryColor;
});
const accountBaseColor = computed(() => {
	return themeVars.value.bodyColor;
});
</script>
<style lang="scss" scoped>
.thing-cell {
	margin: 0 -16px 10px;
	padding: 5px 16px;
	&:hover {
		background: v-bind(accountHoverColor2);
		cursor: pointer;
	}
}
.thing-cell-on {
	background: v-bind(accountActiveColor);
	color: v-bind(accountBaseColor);
	::v-deep(.n-thing-main .n-thing-header .n-thing-header__title) {
		color: v-bind(accountBaseColor);
	}
	&:hover {
		background: v-bind(accountHoverColor);
	}
}
</style>
