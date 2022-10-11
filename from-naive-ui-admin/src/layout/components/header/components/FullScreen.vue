<template>
	<n-tooltip placement="bottom" trigger="hover">
		<template #trigger>
			<n-icon size="18" class="icon-cursor" @click="toggleFullscreen">
				<component :is="isFullscreen ? 'FullscreenExitOutlined' : 'FullscreenOutlined'"></component>
			</n-icon>
		</template>
		<span> 全屏 </span>
	</n-tooltip>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useFullscreen } from "@vueuse/core";
import { useGlobalStore } from "@/stores/index";

const globalStore = useGlobalStore();

const isFullscreen = computed(() => globalStore.isFullscreen);

const toggleFullscreen = () => {
	globalStore.toggleFullscreen();
	toggle();
};

const { toggle } = useFullscreen();
</script>

<style scoped></style>
