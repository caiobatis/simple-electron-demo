const {app, BrowserWindow} = require('electron')

let mainWindow

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
    }
  })

  await mainWindow.loadFile('src/index.html')
}

app
.whenReady()
.then(createWindow)