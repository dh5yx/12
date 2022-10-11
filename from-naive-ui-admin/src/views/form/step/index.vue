<template>
	<div>
		<n-card :bordered="false" title="分步表单"> 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 </n-card>
		<n-card :bordered="false" class="mt-4">
			<div style="width: 800px; margin: 0 auto">
				<n-steps :current="currentTab">
					<n-step title="填写转账信息" description="确保填写正确" />
					<n-step title="确认转账信息" description="确认转账信息" />
					<n-step title="完成转账" description="恭喜您，转账成功" />
				</n-steps>
				<step1 v-show="currentTab === 1" @nextStep="nextStep" />
				<step2 v-show="currentTab === 2" @nextStep="nextStep" @prevStep="prevStep" />
				<step3 v-show="currentTab === 3" @prevStep="prevStep" @finish="finish" />
			</div>
		</n-card>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import step1 from "./Step1.vue";
import step2 from "./Step2.vue";
import step3 from "./Step3.vue";

const currentTab = ref(1);

const nextStep = () => {
	currentTab.value += 1;
};
const prevStep = () => {
	currentTab.value -= 1;
};
const finish = () => {
	currentTab.value = 1;
};
</script>

<style lang="scss" scoped></style>
