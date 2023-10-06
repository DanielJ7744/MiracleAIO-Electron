import * as path from 'path';
import * as url from 'url';
import { BrowserWindow, ipcMain } from 'electron';

let mainWindow: BrowserWindow;
let authWindow: BrowserWindow;
const sentToasts = [];

async function createAuthWindow(): Promise<void> {
  authWindow = new BrowserWindow({
    width: 700,
    height: 400,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, '/authwindow/preload.js'),
    },
    maxHeight: 400,
    maxWidth: 700,
    minHeight: 400,
    minWidth: 700,
    resizable: false,
    transparent: true
  });
  authWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/authwindow/auth.html'),
      protocol: 'file',
      slashes: true,
    }),
  );
}

async function createMainWindow(): Promise<void> {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 770,
    minWidth: 1200,
    minHeight: 770,
    maxWidth: 1920,
    maxHeight: 1080,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: path.resolve(__dirname, '..', 'renderer-preload.js'),
    },
    show: false,
  });

  mainWindow.setMenu(null);
  mainWindow.webContents.openDevTools();
  if (process.env.NODE_ENV !== 'production') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
    await mainWindow.loadURL('http://localhost:2003');
  } else {
    await mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, '..', '..', 'index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  mainWindow.on('close', () => {
    ipcMain.emit('quit');
  });
}

function showMain(): void {
  mainWindow.show();
}

function closeMainWindow(): void {
  mainWindow.hide();
  ipcMain.emit('quit');
}

async function sendToast(toastData): Promise<void> {
  if (sentToasts.includes(toastData.name)) return;
  sentToasts.push(toastData.name);
  mainWindow.webContents.send('productMessage', toastData);
}

async function closeAuthWindow(): Promise<void> {
  authWindow.hide();
  authWindow = null;
}

function hideWindow(): void {
  mainWindow.minimize();
}

function maximize(): void {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
}
async function sendStatusToLogin(message): Promise<void> {
  authWindow.webContents.send('loginMessage', message);
}

export default {
  createMainWindow,
  hideWindow,
  maximize,
  createAuthWindow,
  closeAuthWindow,
  sendStatusToLogin,
  sendToast,
  showMain,
  closeMainWindow,
};
