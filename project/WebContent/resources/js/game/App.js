import Physics from "./Physics.js";

import UserControlHelper from "./control/UserControlHelper.js";
import GraphicControl from "./graphic/GraphicControl.js";
import Miku1 from "./sprites/application_object/miku/Miku1.js";

class App {
    constructor() {
        console.log('app start')
        this.basicPhysics = new Physics()
        
        const miku = new Miku1()
        pushUnitList(miku)

        this.user = new UserControlHelper(miku)
        this.graph = new GraphicControl()
    }
}

window.addEventListener('load', ()=>{
    new App()
})