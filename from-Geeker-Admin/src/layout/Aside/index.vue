<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 13:44:44
 * @LastEditors: dh
 * @LastEditTime: 2022-10-21 13:51:09
-->
<template>
	<div class="aside" :style="{ width: isCollapse ? '65px' : '220px' }">
		<h5 class="logo" :style="{ justifyContent: isCollapse ? 'center' : 'inherit' }">
			<img src="@/assets/images/logo.svg" alt="" />
			<span v-if="!isCollapse">Geeker-Admin</span>
		</h5>
		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				background-color="#191a20"
				text-color="#bdbdc0"
				active-text-color="#fff"
				:collapse="isCollapse"
				:collapse-transition="false"
				:unique-opened="true"
			>
				<MenuItem :menuList="menuList"></MenuItem>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts" setup>
import MenuItem from './MenuItem.vue';
import api from '@/api/index';
import { onMounted } from 'vue';
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/index';
import { useRoute } from 'vue-router';
import { handleRouter } from '@/utils/util';
import { useAuthStore } from '@/stores/modules/auth';

const route = useRoute();

const globalStore = useGlobalStore();
const authStore = useAuthStore();

const menuList = computed(() => globalStore.menuList);
const isCollapse = computed((): boolean => globalStore.isCollapse);
const activeMenu = computed(() => route.path);

const listeningWindow = function () {
	window.onresize = function () {
		const screenWidth = document.body.clientWidth || document.documentElement.clientWidth;
		if (isCollapse.value === false && screenWidth < 1200) globalStore.setCollapse();
		if (isCollapse.value === true && screenWidth > 1200) globalStore.setCollapse();
	};
};

onMounted(async () => {
	const res = await api.menu();
	authStore.setAuthRouter(handleRouter(res.data));
	globalStore.setMenuList(res.data);
	listeningWindow();
});
</script>

<style lang="scss" scoped>
.aside {
	height: 100%;
	transition: all 0.3s;
	background-color: #191a20;
	overflow: hidden;
	// overflow: auto;
}
.el-scrollbar {
	height: calc(100% - 50px);
}
.logo {
	font-size: 20px;
	font-weight: 600;
	height: 50px;
	line-height: 50px;
	padding: 0 10px;
	color: #bdbdc0;
	display: flex;
	img {
		width: 30px;
		vertical-align: middle;
	}
	span {
		margin-left: 5px;
	}
}
.el-menu {
	border-right: none;
}
</style>
