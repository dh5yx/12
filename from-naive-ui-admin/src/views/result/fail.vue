<template>
	<n-card :bordered="false">
		<div class="result-box">
			<n-result status="error" title="操作失败" description="请核对并修改以下信息后，再重新提交。">
				<div class="result-box-extra">
					<p>您提交的内容有如下错误：</p>
					<n-space class="mt-3">
						<n-icon size="20" color="#f0a020">
							<InfoCircleOutlined />
						</n-icon>
						<span>认证照片不够清晰</span>
						<n-button type="info" text>立即修改</n-button>
					</n-space>
					<n-space class="mt-3">
						<n-icon size="20" color="#f0a020">
							<InfoCircleOutlined />
						</n-icon>
						<span>备注包含敏感字符，并且不能包含政治相关</span>
						<n-button type="info" text>立即修改</n-button>
					</n-space>
				</div>
				<template #footer>
					<div class="flex justify-center mb-4">
						<n-space>
							<n-button type="info" @click="goHome">回到首页</n-button>
							<n-button>查看详情</n-button>
							<n-button>打印</n-button>
						</n-space>
					</div>
				</template>
			</n-result>
		</div>
	</n-card>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useThemeVars } from 'naive-ui';
import { useRouter } from 'vue-router';

const router = useRouter();
const themeVars = useThemeVars();

const getTableHeaderColor = computed(() => {
	return themeVars.value.tableHeaderColor;
});

function goHome() {
	router.push('/');
}
</script>
<style lang="scss" scoped>
.result-box {
	width: 72%;
	margin: 0 auto;
	text-align: center;
	&-extra {
		padding: 24px 40px;
		text-align: left;
		background: v-bind(getTableHeaderColor);
		border-radius: 4px;
	}
}
</style>
