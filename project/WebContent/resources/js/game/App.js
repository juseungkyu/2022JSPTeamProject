import Enigne from "./engine/Engine.js";

import UserControlHelper from "./control/UserControlHelper.js"

import DefaultMap from "./map/state1/DefaultMap.js";

import Miku1 from "./sprites/application_object/miku/Miku1.js";
import Wall1 from "./sprites/application_object/wall/Wall1.js";

class App {
    constructor() {
        console.log('app start')
        
        // 물리엔진, 그래픽 렌더링 시작
        this.engine = new Enigne()

        const miku = new Miku1()
        pushUnitList(miku, miku.y)

        const defaultMap = new DefaultMap()

        this.engine.setMap(defaultMap)

        // 유저의 입력을 받기 시작함       
        this.user = new UserControlHelper(miku)
    }
}

window.imageObject = {}

window.addEventListener('load', async ()=>{
    const imageUrls = ['/resources/image/test.png', 

    '/resources/image/miku/mikuStandTemporary1.png',
    '/resources/image/miku/mikuStandTemporary3.png',
    '/resources/image/miku/move/mikuStandTemporaryBehind1.png',
    '/resources/image/miku/move/mikuStandTemporaryBehind2.png',
    '/resources/image/miku/move/mikuStandTemporaryBehind3.png',
    '/resources/image/miku/move/mikuStandTemporaryBehind4.png',

    '/resources/image/enemy/crab/crab1.png',
    '/resources/image/enemy/crab/crab2.png',
    '/resources/image/enemy/crab/crab3.png',
    '/resources/image/enemy/crab/crab4.png',

    '/resources/image/background/sprite0002.png']

    await imageSetting(imageUrls);
	new App()
})