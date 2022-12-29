<template>
	<div class="menu">
		<router-link to="/">首页</router-link>
		<router-link to="/about">关于</router-link>
		<a href="http://www.baidu.com" target="_blank">百度</a>
	</div>
	<div class="content">
		<router-view></router-view>
	</div>
</template>

<style>
.menu * {
	margin-right: 20px;
}

.content {
	margin-top: 20px;
}
</style>
