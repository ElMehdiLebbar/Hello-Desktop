const { contextBridge } = require('electron');

//Creating your API, then export them to the window object for security reasons
//Here you can use node js module like fs, path, ....
contextBridge.exposeInMainWorld('myAPI', {
    sayHello: (name)=> {
        return `Hello ${name} !`
    }
})