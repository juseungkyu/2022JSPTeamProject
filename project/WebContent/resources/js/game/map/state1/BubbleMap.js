// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

import Map from '../Map.js';
import Background2_1 from '../../sprites/application_object/background/tile/Background2_1.js';
import Background2_2 from '../../sprites/application_object/background/tile/Background2_2.js';
import EdgeWall1Downside from '../../sprites/application_object/background/tile/edgeWall1/EdgeWall1Downside.js';
import EdgeWall1Left from '../../sprites/application_object/background/tile/edgeWall1/EdgeWall1Left.js';

// import Wall1 from '../../sprites/application_object/wall/Wall1.js';
import Box1 from '../../sprites/application_object/wall/Box1.js';
import InvisibleBox from '../../sprites/application_object/wall/InvisibleBox.js';

import Slime from '../../sprites/application_object/enemy/Slime.js';
import Crab from '../../sprites/application_object/enemy/Crab.js';
import Seastar from '../../sprites/application_object/enemy/Seastar.js';

import Bubble from '../../sprites/application_object/enemy/Bubble.js';


import TestBoss from '../../sprites/application_object/boss/bossTest/TestBoss.js';
import EdgeWall1Upside from '../../sprites/application_object/background/tile/edgeWall1/EdgeWall1Upside.js';
import EdgeWall1Right from '../../sprites/application_object/background/tile/edgeWall1/EdgeWall1Right.js';

export default class DefaultMap extends Map {
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

        // let a = 10
        // let b = 10
        // sprites.push(new Box1(...this.gridhelper(a, b)))
        // sprites.push(new Box1(...this.gridhelper(a, b+1)))
        // sprites.push(new Box1(...this.gridhelper(a, b+2)))
        // sprites.push(new Box1(...this.gridhelper(a, b+3)))
        // sprites.push(new Box1(...this.gridhelper(a+1, b)))
        // sprites.push(new Box1(...this.gridhelper(a+2, b)))
        // sprites.push(new Box1(...this.gridhelper(a+3, b)))

        // a = 5
        // b = 5
        // sprites.push(new Box1(...this.gridhelper(a, b)))
        // sprites.push(new Box1(...this.gridhelper(a, b+1)))
        // sprites.push(new Box1(...this.gridhelper(a, b+2)))
        // sprites.push(new Box1(...this.gridhelper(a, b+3)))
        // sprites.push(new Box1(...this.gridhelper(a+1, b)))
        // sprites.push(new Box1(...this.gridhelper(a+2, b)))
        // sprites.push(new Box1(...this.gridhelper(a+3, b)))

        // a = 10
        // b = 20
        // sprites.push(new Box1(...this.gridhelper(a, b)))
        // sprites.push(new Box1(...this.gridhelper(a, b-1)))
        // sprites.push(new Box1(...this.gridhelper(a, b-2)))
        // sprites.push(new Box1(...this.gridhelper(a, b-3)))
        // sprites.push(new Box1(...this.gridhelper(a+1, b)))
        // sprites.push(new Box1(...this.gridhelper(a+2, b)))
        // sprites.push(new Box1(...this.gridhelper(a+3, b)))

        // a = 20
        // b = 20
        // sprites.push(new Box1(...this.gridhelper(a, b)))
        // sprites.push(new Box1(...this.gridhelper(a, b-1)))
        // sprites.push(new Box1(...this.gridhelper(a, b-2)))
        // sprites.push(new Box1(...this.gridhelper(a, b-3)))
        // sprites.push(new Box1(...this.gridhelper(a-1, b)))
        // sprites.push(new Box1(...this.gridhelper(a-2, b)))
        // sprites.push(new Box1(...this.gridhelper(a-3, b)))

        // a = 20
        // b = 10
        // sprites.push(new Box1(...this.gridhelper(a, b)))
        // sprites.push(new Box1(...this.gridhelper(a, b+1)))
        // sprites.push(new Box1(...this.gridhelper(a, b+2)))
        // sprites.push(new Box1(...this.gridhelper(a, b+3)))
        // sprites.push(new Box1(...this.gridhelper(a-1, b)))
        // sprites.push(new Box1(...this.gridhelper(a-2, b)))
        // sprites.push(new Box1(...this.gridhelper(a-3, b)))

        // a = 25
        // b = 5
        // sprites.push(new Box1(...this.gridhelper(a, b)))
        // sprites.push(new Box1(...this.gridhelper(a, b+1)))
        // sprites.push(new Box1(...this.gridhelper(a, b+2)))
        // sprites.push(new Box1(...this.gridhelper(a, b+3)))
        // sprites.push(new Box1(...this.gridhelper(a-1, b)))
        // sprites.push(new Box1(...this.gridhelper(a-2, b)))
        // sprites.push(new Box1(...this.gridhelper(a-3, b)))

        
        

        const units = []
        units.push(new Bubble(...this.gridhelper(23, 15)))

        this.init(background, sprites, units)
        background.push(new EdgeWall1Upside(...this.backgroundGridhelper(0, 0, 64)))
        background.push(new EdgeWall1Downside(...this.backgroundGridhelper(0, 12, 64)))
        background.push(new EdgeWall1Left(...this.backgroundGridhelper(0, 0, 64)))
        background.push(new EdgeWall1Right(...this.backgroundGridhelper(15, 0, 64)))
    }
}