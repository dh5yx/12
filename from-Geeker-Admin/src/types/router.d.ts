// eslint-disable-next-line
import type { RouteMeta } from 'vue-router';
declare module 'vue-router' {
	interface RouteMeta {
		// [自定义属性声明]
		title: string;
	}
}
