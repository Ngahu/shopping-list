const electron = require('electron');
const url = require('url');
const path = require('path');



const {app, BrowserWindow,Menu } = electron;


let mainWindow;

//listen for the app to be ready 

app.on('ready',function(){
    //create  new window
    mainWindow = new BrowserWindow({}); 

    //load the html file to the window
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'mainWindow.html'),
        protocol:'file',
        slashes:true
    }));

    // build the menu from template
    const  mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //insert the menu
    Menu.setApplicationMenu(mainMenu);

});


// create a menu template
const  mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label:'Add Item'
            },
            {
                label:'Clear Items'
            },
              {
                  label:'Quit',
                  accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',    //this is an if statement check if Os is mac or a windows/linux
                  click(){
                      app.quit();
                  }
              }
        ]
    }
];