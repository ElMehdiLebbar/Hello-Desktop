const {Seule} = require('seule')


const app = new Seule({
    el: document.querySelector("#app"),
    style : 'css/style-app.css',
    data: {
        message : 'hello Seule'
    }
})
