import type { App } from 'vue';
// * 全部注册
import * as ionicons5 from '@vicons/ionicons5';

// * 局部注册
// import { Accessibility } from "@vicons/ionicons5";
// const ionicons5 = { Accessibility };

export default {
	install(app: App) {
		Object.values(ionicons5).map(item => {
			app.component(item.name, item);
		});
	},
};
