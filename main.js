const { app, BrowserWindow } = require("electron");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 768,
    width: 1024,
    icon: `${__dirname}/Zeplin.svg`
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);

app.on("activate", () => mainWindow === null && createWindow());

app.on(
  "window-all-closed",
  () => process.platform !== "darwin" && app.quit()
);
