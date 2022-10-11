<template>
	<n-grid item-responsive responsive="screen" cols="2" x-gap="12" y-gap="12">
		<n-grid-item span="2 m:2 l:2">
			<Work />
		</n-grid-item>
		<n-grid-item span="2 m:2 l:1">
			<n-grid item-responsive responsive="screen" cols="1" x-gap="12" y-gap="12">
				<n-grid-item>
					<Project />
				</n-grid-item>
				<n-grid-item>
					<Dynamic />
				</n-grid-item>
			</n-grid>
		</n-grid-item>
		<n-grid-item span="2 m:2 l:1">
			<n-grid item-responsive responsive="screen" cols="1" x-gap="12" y-gap="12">
				<n-grid-item>
					<Quick />
				</n-grid-item>
				<n-grid-item>
					<Business />
				</n-grid-item>
			</n-grid>
		</n-grid-item>
	</n-grid>
</template>

<script setup lang="ts">
import Work from "./work.vue";
import Project from "./project.vue";
import Quick from "./quick.vue";
import Dynamic from "./dynamic.vue";
import Business from "./business.vue";
</script>

<style lang="scss" scoped></style>
