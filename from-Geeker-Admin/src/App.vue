<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-20 16:45:32
 * @LastEditors: dh
 * @LastEditTime: 2022-08-26 08:15:45
-->
<template>
	<el-config-provider :button="config" :size="size" :locale="locale">
		<RouterView />
	</el-config-provider>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { useElementStore } from "@/stores/modules/element";
import zh from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const config = reactive({
	autoInsertSpace: true,
});

const elementStore = useElementStore();
const locale = computed(() => (elementStore.locale === "zh" ? zh : en));
const size = computed(() => elementStore.size);
</script>
