### electron 使用前注意事项

- 下载慢 打包慢
  ```js
  // 下载需要
  npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
  // 打包需要
  npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://npm.taobao.org/mirrors/electron-builder-binaries/
  ```
- 下载包时，选择本案例中版本，每个版本会有不同
- 二次打包总是报错，关闭编辑器重新打开

### 添加 electron

```js
// electrons/index.ts
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

let win: BrowserWindow | null;

const createWindow = () => {
	win = new BrowserWindow({
		webPreferences: {
			devTools: true,
			contextIsolation: false,
			nodeIntegration: true,
		},
	});

	if (process.env.NODE_ENV !== 'development') {
		win.loadFile(path.join(__dirname, '../index.html'));
	} else {
		win.loadURL(`http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`);
	}
};

app.whenReady().then(createWindow);
```

```js
// vite.config.js
import electron from 'vite-plugin-electron';
export default defineConfig({
	plugins: [
		electron({
			main: {
				entry: 'electrons/index.ts',
			},
		}),
	],
});
```

### 渲染进程和主进程通讯

- 准备

  ```js
  // 添加 vite-plugin-electron-renderer 插件，安转 vite-plugin-electron 时，已经安装次插件
  import electronRender from 'vite-plugin-electron-renderer';
  export default defineConfig({
  	plugins: [electronRender()],
  });
  ```

- 渲染进程发送消息

  ```js
  // 发送
  import { ipcRenderer } from 'electron';
  ipcRenderer.send('msg', '11111');

  // 接收 electrons/index.ts
  import { ipcMain } from 'electron';
  ipcMain.on('msg', (_, data) => {
  	console.log('主进程收到消息：', data);
  });
  ```

- 主进程发送消息

  ```js
  // 发送 electrons/index.ts
  win?.webContents.send('msg', { message: '22222' });

  // 接收
  import { ipcRenderer } from 'electron';
  ipcRenderer.on('msg', (_, data) => {
  	console.log('渲染进程收到消息：', data);
  });
  ```

### 主进程接收消息控制台乱码

```json
// 启动服务添加字符集 package.json
{
	"scripts": {
		"dev": "chcp 65001 && cross-env NODE_ENV=development vite"
	}
}
```

### 解决环境识别异常

```bash
npm i cross-env -D
```

```json
// 运行服务时添加 NODE_ENV package.json
{
	"scripts": {
		"dev": "chcp 65001 && cross-env NODE_ENV=development vite",
		"build": "cross-env NODE_ENV=production vue-tsc --noEmit && vite build &&  electron-builder"
	}
}
// TODO 主进程和渲染进程中可通过 process.env.NODE_ENV 判断环境
```

### 调试工具

下载 debugtron 调试 
