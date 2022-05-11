//Importing an Instance class from the Seule module to create new Seule Application
import {Instance} from "seule";
//You can not use CSS files directly in html pages, but you can call it with _Css method
import main_css from "./css/main.css"

import {_Css} from "seule/model"
//Importing css for a specific application
import css from "./css/index.css"

_Css(main_css);

new Instance({
    el: ("#app"),
    style:css,
    data:{
        greeting: "..."
    },
    async handlers(app){
        //For security reasons you cannot select element inside #app, otherwise we need to use Scope Selector
        const {Scope} = await import("seule/selectors");

        //To use Seule events, we need to import Events function from events module
        const {Events} = await import("seule/events");
        //Initialize the event methods
        Events();

        const
            scope = Scope(app),
            nav = scope.Select("nav"),
            btn = scope.Select("button");

        //The Click event occurs when the user clicks on the Button Element.
        btn.Click(()=> {
            //We can use our API in renderer.js by calling the window Object
            app.data.greeting = window.myAPI.sayHello("Seule");

            //We can use pure Javascript by invoking Native Method
            nav.Native(e=> e.style.backgroundColor = "var(--light)");
        })


    }
})






