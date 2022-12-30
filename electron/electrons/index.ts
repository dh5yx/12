import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

//app 控制应用程序的事件生命周期。
//BrowserWindow 创建并控制浏览器窗口。

let win: BrowserWindow | null;

//定义全局变量获取 窗口实例
const createWindow = () => {
	win = new BrowserWindow({
		//
		webPreferences: {
			devTools: true,
			contextIsolation: false,
			nodeIntegration: true,
			//允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
		},
	});

	// console.log(process.env);
	// console.log(app.isPackaged, 'app.isPackaged');

	if (process.env.NODE_ENV !== 'development') {
		win.loadFile(path.join(__dirname, '../index.html'));
	} else {
		//VITE_DEV_SERVER_HOST 如果是undefined 换成  VITE_DEV_SERVER_HOSTNAME
		win.loadURL(`http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`);
	}

	// 打开渲染进程调试工具
	win.webContents.openDevTools();

	// 接收渲染进程消息
	ipcMain.on('msg', (_, data) => {
		console.log('主进程收到消息：', data);

		// 向渲染进程发送消息
		win?.webContents.send('msg', { message: '22222' });
	});
};

app.whenReady().then(createWindow);
