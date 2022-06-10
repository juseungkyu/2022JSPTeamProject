import Enigne from "./engine/Engine.js";
import UserControlHelper from "./control/UserControlHelper.js"

import DefaultMap from "./map/state1/DefaultMap.js";

import Miku1 from "./sprites/application_object/miku/Miku1.js";
import Wall1 from "./sprites/application_object/wall/Wall1.js";



class App {
    constructor() {
        console.log('app start')
        
        const miku = new Miku1()
        pushUnitList(miku, miku.y)

        // 유저의 입력을 받기 시작함       
        this.user = new UserControlHelper(miku)

        // 게임 엔진 시작 시작
        this.engine = new Enigne()
    }
}

window.imageObject = {}

window.addEventListener('load', async ()=>{
    await initGameImage()
	new App()
})

async function initGameImage(){

    // 이미지 로딩
    const imageUrls = [
    '/resources/image/test.png', 

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

    '/resources/image/terrain/center_wall1.png',
    '/resources/image/terrain/left_wall1.png',
    '/resources/image/terrain/right_wall1.png',
    '/resources/image/terrain/box1.png',

    '/resources/image/background/sprite0002.png',
    
    '/resources/image/background/background1_1.png',

    '/resources/image/background/background2_1.png',
    '/resources/image/background/background2_2.png',

    '/resources/image/effect/disappearBullet/disappearBullet1.png',
    '/resources/image/effect/disappearBullet/disappearBullet2.png',
    '/resources/image/effect/disappearBullet/disappearBullet3.png',
    '/resources/image/effect/disappearBullet/disappearBullet4.png',
    '/resources/image/effect/disappearBullet/disappearBullet5.png',
    '/resources/image/effect/disappearBullet/disappearBullet6.png',
    '/resources/image/effect/disappearBullet/disappearBullet7.png',

    
    ]

    await imageSetting(imageUrls);
}