<template>
  <iframe :src="frameSrc" class="frame-iframe" ref="frameRef"></iframe>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const frameSrc = ref("");
</script>

<style lang="scss" scoped></style>
