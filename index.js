const { app, BrowserWindow , screen} = require('electron')
try {
    require('electron-reloader')(module)
  } catch (_) {}

function createWindow(){
    let display = screen.getPrimaryDisplay()
    let width = display.bounds.width
    let height = display.bounds.height
    const win = new BrowserWindow({
        width: 405,
        height: 566,
        x: width - 415,
        y:height - 616,
        transparent:true,
        frame:false,
        movable:false,
        fullscreenable:false,
        resizable:false,
        webPreferences:{
            devTools:false
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(()=>{
    createWindow()
})