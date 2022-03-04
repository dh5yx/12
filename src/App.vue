<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:13:58
 * @LastEditors: dh
 * @LastEditTime: 2022-01-24 09:09:29
-->
<script setup lang="ts">
import SetUp from 'views/setup.vue';
import SetUp2 from 'views/setup2.vue';
</script>

<template>
    <div>
        <router-link to="/">
            <el-button type="primary">home</el-button>
        </router-link>
        <router-link to="/vuex">
            <el-button type="warning">Vuex</el-button>
        </router-link>
        <router-link to="/axios">
            <el-button type="danger">axios</el-button>
        </router-link>

        <router-view></router-view>
        <SetUp />
        <SetUp2 />
    </div>
</template>

<style></style>
