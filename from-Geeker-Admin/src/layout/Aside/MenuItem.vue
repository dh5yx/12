<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 15:49:31
 * @LastEditors: dh
 * @LastEditTime: 2022-10-21 11:55:19
-->
<template>
	<template v-for="item in menuList" :key="item.path">
		<el-sub-menu v-if="item.children && item.children.length" :index="item.path">
			<template #title>
				<el-icon>
					<component :is="item.meta.icon"></component>
				</el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<MenuItem :menuList="item.children"></MenuItem>
		</el-sub-menu>
		<el-menu-item v-else :index="item.path" @click="changeRouter(item)">
			<el-icon>
				<component :is="item.meta.icon"></component>
			</el-icon>
			<span>{{ item.meta.title }}</span>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts" name="MenuItem">
import { useRouter } from 'vue-router';
defineProps<{ menuList: Array<Menu.MenuOptions> }>();

const router = useRouter();

const changeRouter = (e: Menu.MenuOptions) => {
	if (e.meta.isLink) {
		window.open(e.meta.isLink, '_blank');
	} else {
		router.push(e.path);
	}
};
</script>

<style lang="scss" scoped></style>
