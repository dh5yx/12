<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-01-24 10:07:13
 * @LastEditors: dh
 * @LastEditTime: 2022-01-24 10:07:14
-->
<template>
	<div class="test-container page-container">
		<div class="page-title">Unit Test Page</div>
		<p>count is: {{ count }}</p>
		<button @click="increment">increment</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'Vuex',
	setup() {
		const count = ref<number>(0);
		const increment = () => {
			count.value += 1;
		};
		return { count, increment };
	},
});
</script>
