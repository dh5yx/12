<template>
	<n-tooltip placement="bottom" trigger="hover">
		<template #trigger>
			<n-icon size="18" class="icon-cursor" @click="handleUpdateShow">
				<GithubOutlined />
			</n-icon>
		</template>
		<span> github </span>
	</n-tooltip>
</template>

<script setup lang="ts">
const handleUpdateShow = () => {
	window.open('https://github.com/jekip/naive-ui-admin');
};
</script>

<style scoped></style>
