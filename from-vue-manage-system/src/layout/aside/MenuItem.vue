<template>
	<template v-for="item in menuList" :key="item.path">
		<el-sub-menu v-if="item.subs" :index="item.index">
			<template #title>
				<el-icon>
					<i :class="item.icon"></i>
				</el-icon>
				<span>{{ item.title }}</span>
			</template>
			<MenuItem :menuList="item.subs"></MenuItem>
		</el-sub-menu>
		<el-menu-item v-else :index="item.index">
			<el-icon>
				<i :class="item.icon"></i>
			</el-icon>
			<span>{{ item.title }}</span>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts" name="MenuItem">
defineProps<{ menuList: Array<Menu> }>();
</script>

<style scoped></style>
