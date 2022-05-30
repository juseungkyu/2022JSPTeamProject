import Enigne from "./engine/Engine.js";

import UserControlHelper from "./control/UserControlHelper.js"

import Miku1 from "./sprites/application_object/miku/Miku1.js";
import Wall1 from "./sprites/application_object/wall/wall1.js";

class App {
    constructor() {
        console.log('app start')
        this.engine = new Enigne()

        const miku = new Miku1()
        pushUnitList(miku, miku.y)

        const wall1 = new Wall1()
        pushSpriteList(wall1, wall1.y)

        this.user = new UserControlHelper(miku)
    }
}

window.addEventListener('load', ()=>{
    new App()
})