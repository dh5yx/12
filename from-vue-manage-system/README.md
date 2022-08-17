# 此项目 参照 https://github.com/lin-xin/vue-manage-system 项目构建，大部分是copy的，主要为了数据 vue3 + ts + pinia

## iconfont

index.html 引入三方字体图标

## 国际化 i18n 9x

1. 安装 9x 版本
   yarn add vue-i18n -S

2. 创建

```js
import { createI18n } from 'vue-i18n';
import zh from './modules/zh';
import en from './modules/en';
const i18n = createI18n({
	legacy: false, // 如果要支持 compositionAPI，此项必须设置为 false
	locale: 'zh', // set locale 设置当前语言
	// fallbackLocale: 'en', // set fallback locale  失败的回退语言
	messages: { zh, en }, // set locale messages
});

export default i18n;

// main.js
import i18n from '@/language/index';
app.use(i18n)

// 语言模块  modules
export default {
	message: {
		hello: '你好、世界',
	},
	i18n: {
		breadcrumb: '国际化产品',
		tips: '通过切换语言按钮，来改变当前内容的语言。',
		btn: '切换英文',
		title1: '常用用法',
		p1: '要是你把你的秘密告诉了风，那就别怪风把它带给树。',
		p2: '没有什么比信念更能支撑我们度过艰难的时光了。',
		p3: '只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。',
	},
};

```

3. 切换

```js
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const changeI18n = () => {
	const locale = globalStore.locale === 'zh' ? 'en' : 'zh';
	i18n.locale.value = locale; // 这里要和创建时的字段一直
};
```

## tabs

监听路由变化，添加 tab
