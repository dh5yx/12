import { h, resolveComponent } from "vue";
import { NIcon } from "naive-ui";
import type { Component } from "vue";

// * 渲染icon组件
export function renderIcon(icon: string | Component) {
	if (typeof icon !== "string") {
		// 方式一 h(组件)
		return () => h(NIcon, null, { default: () => h(icon as Component) });
	} else {
		// 方式二 h(resolveComponent(组件名))
		// return () => h(NIcon, null, { default: () => h(resolveComponent((icon || "") as string)) });
		return () => h(resolveComponent((icon || "") as string));
	}
}
