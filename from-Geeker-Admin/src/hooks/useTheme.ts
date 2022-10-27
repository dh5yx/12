/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-10 16:59:20
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:17:03
 */
/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-03 15:16:54
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:01:30
 */
import { onBeforeMount } from 'vue';
import { useConfigStore } from '@/stores/modules/config';
import { DEFAULT_PRIMARY } from '@/config';
import { ElMessage } from 'element-plus';
import { getLightColor, getDarkColor } from '@/utils/theme/tool';

export default function useTheme() {
	// 切换 反转色彩模式
	const configStore = useConfigStore();

	const weakChange = () => {
		const body = document.body;
		body.style.filter = configStore.isWeak ? 'invert(80%)' : 'invert(0)';
		configStore.$patch({ isGrey: false });
	};

	// 切换灰色模式
	const greyChange = () => {
		const body = document.body;
		body.style.filter = configStore.isGrey ? 'grayscale(1)' : 'grayscale(0)';
		configStore.setWeak(false);
	};

	// 切换暗黑模式
	const darkCChange = () => {
		const body = document.documentElement as HTMLElement;
		configStore.isDark ? body.classList.add('dark') : body.classList.remove('dark');
	};

	// 修改主题颜色
	const primaryChange = (val: string) => {
		if (!val) {
			val = DEFAULT_PRIMARY;
			ElMessage({
				type: 'success',
				message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`,
			});
		}
		configStore.setPrimary(val);
		// 颜色加深
		document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(configStore.primary, 0.1)}`);
		document.documentElement.style.setProperty('--el-color-primary', configStore.primary);
		// 颜色变浅
		for (let i = 1; i <= 9; i++) {
			document.documentElement.style.setProperty(
				`--el-color-primary-light-${i}`,
				`${getLightColor(configStore.primary, i / 10)}`
			);
		}
	};

	onBeforeMount(() => {
		darkCChange();
		primaryChange(configStore.primary);
		configStore.isWeak && weakChange();
		configStore.isGrey && greyChange();
	});

	return { weakChange, greyChange, darkCChange, primaryChange };
}
