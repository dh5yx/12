<template>
	<n-grid :x-gap="24">
		<n-grid-item span="6">
			<n-card :bordered="false" size="small" class="proCard">
				<n-thing
					class="thing-cell"
					v-for="item in typeTabList"
					:key="item.key"
					:class="{ 'thing-cell-on': type === item.key }"
					@click="switchType(item)"
				>
					<template #header>{{ item.name }}</template>
					<template #description>{{ item.desc }}</template>
				</n-thing>
			</n-card>
		</n-grid-item>
		<n-grid-item span="18">
			<n-card :bordered="false" size="small" :title="typeTitle" class="proCard">
				<BasicSetting v-if="type === 1" />
				<RevealSetting v-if="type === 2" />
				<EmailSetting v-if="type === 3" />
			</n-card>
		</n-grid-item>
	</n-grid>
</template>
<script lang="ts">
import BasicSetting from './BasicSetting.vue';
import RevealSetting from './RevealSetting.vue';
import EmailSetting from './EmailSetting.vue';
import { defineComponent, reactive, toRefs, computed } from 'vue';
import { useThemeVars } from 'naive-ui';
const typeTabList = [
	{ name: '基本设置', desc: '系统常规设置', key: 1 },
	{ name: '显示设置', desc: '系统显示设置', key: 2 },
	{ name: '邮件设置', desc: '系统邮件设置', key: 3 },
];
export default defineComponent({
	components: { BasicSetting, RevealSetting, EmailSetting },
	setup() {
		const themeVars = useThemeVars();

		const state = reactive({
			type: 1,
			typeTitle: '基本设置',
		});

		function switchType(e: any) {
			state.type = e.key;
			state.typeTitle = e.name;
		}

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

		return {
			...toRefs(state),
			switchType,
			typeTabList,
			accountHoverColor,
			accountHoverColor2,
			accountActiveColor,
			accountBaseColor,
		};
	},
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
