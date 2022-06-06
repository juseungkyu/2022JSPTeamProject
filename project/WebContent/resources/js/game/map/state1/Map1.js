// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

import Map from '../Map.js';
import Background2_1 from '../../sprites/application_object/background/tile/Background2_1.js';
import Background2_2 from '../../sprites/application_object/background/tile/Background2_2.js';
// import Wall1 from '../../sprites/application_object/wall/Wall1.js';
import Box1 from '../../sprites/application_object/wall/Box1.js';

import Slime from '../../sprites/application_object/enemy/Slime.js';
import Crab from '../../sprites/application_object/enemy/Crab.js';

import TestBoss from '../../sprites/application_object/boss/bossTest/TestBoss.js';

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
            sprites.push(new Box1(...this.gridhelper(i, 0)))
            sprites.push(new Box1(...this.gridhelper(i, 24)))
        }

        for(let i = 1; i < 24; i++){
            sprites.push(new Box1(...this.gridhelper(0, i)))
            sprites.push(new Box1(...this.gridhelper(31, i)))
        }

        sprites.push(new Box1(...this.gridhelper(10, 15)))
        sprites.push(new Box1(...this.gridhelper(11, 15)))
        sprites.push(new Box1(...this.gridhelper(12, 15)))
        sprites.push(new Box1(...this.gridhelper(12, 16)))

        const units = []
        
        units.push(new Slime(...this.gridhelper(20, 10)))
        units.push(new Crab(...this.gridhelper(20, 10)))

        units.push(new TestBoss(...this.gridhelper(20, 10)))

        this.init(background, sprites, units)
    }
}