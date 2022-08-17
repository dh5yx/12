<template>
	<el-config-provider size="default" :button="{ autoInsertSpace: true }" :locale="locale">
		<router-view></router-view>
	</el-config-provider>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/index';
import { computed, onBeforeMount } from 'vue';
import { useI18n } from 'vue-i18n';
import zh from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';

const locale = computed(() => (globalStore.locale === 'zh' ? zh : en));

const i18n = useI18n();
const globalStore = useGlobalStore();

onBeforeMount(() => {
	i18n.locale.value = globalStore.locale;
});
</script>

<style></style>
