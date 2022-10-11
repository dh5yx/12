import type { App } from "vue";
// * 全部注册
import * as antd from "@vicons/antd";

// * 局部注册
// import { AccountBookFilled } from "@vicons/antd";
// const antd = { AccountBookFilled };

export default {
	install(app: App) {
		Object.values(antd).map(item => {
			app.component(item.name, item);
		});
	},
};
