const electron = require('electron');
const url = require('url');
const path = require('path');



const {app, BrowserWindow,Menu } = electron;


let mainWindow;
let addWindow;


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

    //Quit the app when closed
    mainWindow.on('closed',function(){
        app.quit();
    });

    // build the menu from template
    const  mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //insert the menu
    Menu.setApplicationMenu(mainMenu);

});

///handle create addwindow
function createAddWindow(){
    //create a  new window
   addWindow= new BrowserWindow({
       width:500,
       height:200,
       title:'Add Shopping List Item'
   }); 
    //load the html file to the window
    addWindow.loadURL(url.format({
        pathname:path.join(__dirname,'addWindow.html'),
        protocol:'file',
        slashes:true
    }));

}


// create a menu template
const  mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label:'Add Item',
                click(){
                    createAddWindow();
                }
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