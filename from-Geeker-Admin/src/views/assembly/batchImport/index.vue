<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-28 09:23:14
 * @LastEditors: dh
 * @LastEditTime: 2022-08-17 14:36:49
-->
<template>
	<div class="content-box">
		<span class="text">文件上传 🍇🍇🍇🍓🍓🍓</span>
		<div class="box-content">
			<el-form class="up-file" label-width="140px">
				<el-form-item label="模板下载">
					<el-button type="primary" :icon="Download" @click="exportTemplate">点击下载 </el-button>
				</el-form-item>
				<el-form-item label="限制文件类型上传">
					<UploadFile ref="uploadFile" :accept="['.xlx', '.xlsx']" :uploadApi="api.batchAddUser" />
				</el-form-item>
				<el-form-item label="所有文件类型上传">
					<UploadFile ref="uploadFile" :uploadApi="api.batchAddUser" />
				</el-form-item>
				<el-form-item label="数据覆盖">
					<el-switch v-model="isCover"></el-switch>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import UploadFile from "@/components/UploadFile/index.vue";
import useDownload from "@/hooks/useDownload";
import api from "@/api/index";
import { ref } from "vue";
import { Download } from "@element-plus/icons-vue";

const uploadFile = ref(null);
const isCover = ref<boolean>(false);

const exportTemplate = function () {
	useDownload(api.exportTem, null, "test");
};
</script>

<style lang="scss" scoped>
.up-file {
	width: 800px;
	margin: 0 auto;
}
</style>
