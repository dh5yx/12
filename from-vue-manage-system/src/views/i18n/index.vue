<template>
	<div>
		<p>{{ $t('message.hello') }}</p>
		<div class="container">
			<span>{{ $t('i18n.tips') }}</span>
			<el-button type="primary" @click="changeI18n">{{ $t('i18n.btn') }}</el-button>
			<div class="list">
				<h2>{{ $t('i18n.title1') }}</h2>
				<p>{{ $t('i18n.p1') }}</p>
				<p>{{ $t('i18n.p2') }}</p>
				<p>{{ $t('i18n.p3') }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useGlobalStore } from '@/stores/index';

const globalStore = useGlobalStore();
const i18n = useI18n();

const changeI18n = () => {
	const locale = globalStore.locale === 'zh' ? 'en' : 'zh';
	i18n.locale.value = locale;
	globalStore.$patch({ locale: locale });
};
</script>

<style scoped>
h2 {
	line-height: 3;
	font-size: 600;
	font-size: 30px;
}
</style>
