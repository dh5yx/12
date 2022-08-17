<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 15:01:17
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:01:23
-->
<template>
	<el-dropdown trigger="click" @command="command">
		<span class="el-dropdown-link">
			<el-tooltip effect="dark" :content="$t('header.componentSize')" placement="bottom">
				<i :class="'iconfont icon-contentright'" class="icon-style"></i>
			</el-tooltip>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item :disabled="size === 'default'" command="default">默认</el-dropdown-item>
				<el-dropdown-item :disabled="size === 'large'" command="large">大型</el-dropdown-item>
				<el-dropdown-item :disabled="size === 'small'" command="small">小型</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useElementStore } from "@/stores/modules/element";

const elementStore = useElementStore();

const command = function (e: ElementSize): void {
	elementStore.changeSize(e);
};

const size = computed(() => elementStore.size);
</script>

<style scoped></style>
