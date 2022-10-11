<template>
	<n-spin :show="loading">
		<div class="frame">
			<iframe :src="frameSrc" class="frame-iframe" ref="frameRef"></iframe>
		</div>
	</n-spin>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, unref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const loading = ref(false);
const frameRef = ref<InstanceType<typeof HTMLIFrameElement> | null>(null);
const frameSrc = computed(() => {
	return route.meta.frameSrc as string;
});

onMounted(() => {
	loading.value = true;
	const iframe = unref(frameRef);
	if (!iframe) return;
	iframe.onload = () => {
		loading.value = false;
	};
});
</script>

<style lang="scss" scoped>
.frame {
	width: 100%;
	height: calc(100vh - 150px);
	.frame-iframe {
		width: 100%;
		height: 100%;
	}
}
</style>
