<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:24:52
 * @LastEditors: dh
 * @LastEditTime: 2022-01-24 09:24:07
-->
<template>
	<div class="page-vuex">
		<div>vuex</div>
		<div>
			<span>age:</span>
			<span>{{ age }}</span>
			<button @click="changeAge">改变</button>
		</div>
		<div>
			<span>name:</span>
			<span>{{ name }}</span>
			<button @click="changeName">改变</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const age = computed(() => store.state.age);
const name = computed(() => store.state.user.name);
const changeAge = () => store.dispatch('A_change_age', 2);
const changeName = () => store.dispatch('user/A_change_name', 'lei-xin');
</script>

<style scoped>
.page-vuex {
	border: 1px dashed teal;
}
</style>
