<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 11:14:47
 * @LastEditors: dh
 * @LastEditTime: 2022-01-24 09:25:50
-->
<template>
    <h2>常规</h2>
    <div>{{ num }}</div>
    <button @click="add(1)">增加</button>
    <button @click="add(-1)">减少</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const num = ref(0);
        const add = function (n: number): void {
            num.value += n;
        };
        return { num, add };
    },
});
</script>

<style scoped></style>
