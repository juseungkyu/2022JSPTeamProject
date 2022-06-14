// 필요한 객체 임포트

import Map from '../Map.js';
import Background2_1 from '../../sprites/application_object/background/tile/Background2_1.js';
import Background2_2 from '../../sprites/application_object/background/tile/Background2_2.js';

import Box1 from '../../sprites/application_object/wall/Box1.js';
import InvisibleBox from '../../sprites/application_object/wall/InvisibleBox.js';

import HermitCrab from '../../sprites/application_object/boss/hermitCrab/HermitCrab.js';

// 시작 튜토리얼 맵
export default class StartMap extends Map {
    constructor() {
        super()

        const background = []

        for(let j = 0; j < 1024 / 64; j++){
            for(let i = 0; i < 800 / 64; i++){
                if(Math.round(Math.random() * 7) == 0){
                    background.push(new Background2_2(...this.backgroundGridhelper(j, i, 64)))
                } else {
                    background.push(new Background2_1(...this.backgroundGridhelper(j, i, 64)))
                }
            }
        }
        
        const sprites = []
        
        for(let i = 0; i < 32; i++){
            sprites.push(new InvisibleBox(...this.gridhelper(i, 0)))
            sprites.push(new InvisibleBox(...this.gridhelper(i, 1)))
            sprites.push(new InvisibleBox(...this.gridhelper(i, 24)))
        }

        for(let i = 1; i < 24; i++){
            sprites.push(new InvisibleBox(...this.gridhelper(1, i)))
            sprites.push(new InvisibleBox(...this.gridhelper(30, i)))
        }

        let a = 20
        let b = 8
        sprites.push(new Box1(...this.gridhelper(a, b)))
        sprites.push(new Box1(...this.gridhelper(a, b+1)))
        sprites.push(new Box1(...this.gridhelper(a+1, b)))
        sprites.push(new Box1(...this.gridhelper(a+1, b+1)))

        b = 20
        sprites.push(new Box1(...this.gridhelper(a, b)))
        sprites.push(new Box1(...this.gridhelper(a, b+1)))
        sprites.push(new Box1(...this.gridhelper(a+1, b)))
        sprites.push(new Box1(...this.gridhelper(a+1, b+1)))

        
        const units = []
        // units.push(new BubbleBaby(...this.gridhelper(25, 16)))
        units.push(new HermitCrab(...this.gridhelper(25, 16)))

        this.init(background, sprites, units)
        // background.push(new EdgeWall1Upside(...this.backgroundGridhelper(0, 0, 64)))
        // background.push(new EdgeWall1Downside(...this.backgroundGridhelper(0, 10, 64)))
        // background.push(new EdgeWall1Left(...this.backgroundGridhelper(0, 0, 64)))
        // background.push(new EdgeWall1Right(...this.backgroundGridhelper(0, 0, 64)))
    }
}