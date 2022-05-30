import Enigne from "./engine/Engine.js";

import UserControlHelper from "./control/UserControlHelper.js"

import Miku1 from "./sprites/application_object/miku/Miku1.js";
import Wall1 from "./sprites/application_object/wall/Wall1.js";

class App {
    constructor() {
        console.log('app start')
        
        // 물리엔진, 그래픽 렌더링 시작
        this.engine = new Enigne()

        const miku = new Miku1()
        pushUnitList(miku, miku.y)

        const wall1 = new Wall1()
        pushSpriteList(wall1, wall1.y)

        // 유저의 입력을 받기 시작함       
        this.user = new UserControlHelper(miku)
    }
}

window.addEventListener('load', async ()=>{
    await imageSetting();
	new App()
})