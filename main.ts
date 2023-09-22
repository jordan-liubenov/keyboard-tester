const { app, BrowserWindow } = require("electron")
const path = require("path")
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    webSecurity: false,
  })
  const htmlFilePath = path.join(__dirname, "build", "html.index")
  mainWindow.loadURL("http://localhost:3000")
  mainWindow.loadFile("build/index.html")
  mainWindow.on("closed", function () {
    app.quit()
  })
}

app.whenReady().then(createWindow)

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
