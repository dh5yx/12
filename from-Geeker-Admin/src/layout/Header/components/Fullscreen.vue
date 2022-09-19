<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-21 15:12:29
 * @LastEditors: dh
 * @LastEditTime: 2022-08-30 09:24:22
-->
<template>
	<div>
		<i :class="['iconfont', isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" class="icon-style" @click="toggle"></i>
	</div>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";

const { toggle, isFullscreen } = useFullscreen();
</script>

<style lang="scss" scoped></style>
