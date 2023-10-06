import { app, ipcMain as ipc, clipboard } from 'electron';
import _ from 'lodash';
import currentProcesses from 'current-processes';

import windowManager from './helpers/main-window';
import apiManager from './managers/api-manager';
import logsManager from './managers/logs-manager';

if (process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'production';
const THREE_MINUTES = 180000;

function scanProcesses(): void {
  currentProcesses.get((err, processes) => {
    const sorted = _.sortBy(processes, 'cpu');
    for (let i = 0; i < sorted.length; i += 1) {
      if (sorted[i].name.toLowerCase() === 'charles' || sorted[i].name.toLowerCase() === 'wireshark' || sorted[i].name.toLowerCase() === 'fiddler') {
        console.log('fuck out of here');
        app.quit();
      }
    }
  });
}
function checkProcesses(starting = false): void {
  if (process.env.NODE_ENV === 'development') return;
  try {
    // If the bot is starting we check every 3 minutes
    if (starting) {
      setInterval(() => {
        scanProcesses();
      }, THREE_MINUTES);
      // If it's not starting then we check whenever we make an api call, start task, etc
    } else {
      scanProcesses();
    }
  } catch (error) {
    console.log(error);
  }
}
const shouldNotQuit = app.requestSingleInstanceLock();
if (!shouldNotQuit) {
  app.quit();
}
app.on('ready', async () => {
  /*
   * Initialize profiles, settings, and proxies
   */
  logsManager.initLogs();

  checkProcesses(true);
  await windowManager.createAuthWindow();
});
// Necessary for captcha auto click
app.commandLine.appendSwitch('disable-site-isolation-trials');

// Proxy Login Event
app.on('activate', () => !windowManager && windowManager.createMainWindow());
app.on('window-all-closed', () => {
  app.exit();
  process.exit(0);
});
app.on('before-quit', (event) => {
  event.preventDefault();
  ipc.emit('quit');
});
ipc.on('show-me', () => windowManager.showMain());
ipc.on('quit', () => {
  app.exit();
  process.exit(0);
});
ipc.on('minimize', () => windowManager.hideWindow());
ipc.on('maxamize', () => windowManager.maximize());

ipc.on('login-key', async (e, key) => {
  checkProcesses();
  if (await apiManager.activateKey(key)) {
    await windowManager.closeAuthWindow();
    await windowManager.createMainWindow();
  } else {
    windowManager.sendStatusToLogin('Key invalid or needs to be deactivated.');
  }
});

/**
 * SETTINGS EVENTS
 */
ipc.on('send-logs', async (e, logId) => {
  clipboard.writeText(logId.toString());
  logsManager.sendLogs(logId);
});
