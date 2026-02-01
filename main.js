const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173");
  //  win.loadFile(path.join(__dirname,'vite-project', 'dist', 'index.html'));
};

app.whenReady().then(() => {
  require("./database/database.js");
  require("./database/reservas.js");
  createWindow();
});

console.log("DB PATH:", app.getPath("userData"));

ipcMain.handle("ping", () => "pong");

// vite-project\index.html
