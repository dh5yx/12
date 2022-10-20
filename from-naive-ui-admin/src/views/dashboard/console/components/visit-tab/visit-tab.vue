<template>
	<div>
		<n-card size="small">
			<n-tabs type="line" animated>
				<n-tab-pane name="oasis" tab="流量趋势">
					<Charts1 />
				</n-tab-pane>
				<n-tab-pane name="the beatles" tab="访问量">
					<Charts2 />
				</n-tab-pane>
			</n-tabs>
		</n-card>
	</div>
</template>

<script setup lang="ts">
import Charts1 from './charts1.vue';
import Charts2 from './charts2.vue';
</script>

<style scoped></style>
