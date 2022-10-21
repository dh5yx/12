<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 15:12:29
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:01:17
-->
<template>
	<el-dropdown trigger="click" @command="command">
		<span class="el-dropdown-link">
			<el-tooltip effect="dark" :content="$t('header.language')" placement="bottom">
				<i :class="'iconfont icon-zhongyingwen'" class="icon-style"></i>
			</el-tooltip>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item :disabled="locale !== 'en'" command="zh">简体中文</el-dropdown-item>
				<el-dropdown-item :disabled="locale === 'en'" command="en">English</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import { useElementStore } from '@/stores/modules/element';
import { useI18n } from 'vue-i18n';
import { getBrowserLang } from '@/utils/util';

const i18n = useI18n();
const elementStore = useElementStore();

const command = function (lang: string): void {
	i18n.locale.value = lang;
	elementStore.changeLocale(lang);
};

const locale = computed(() => elementStore.locale);

onBeforeMount(() => {
	i18n.locale.value = elementStore.locale || getBrowserLang();
});
</script>

<style lang="scss" scoped></style>
