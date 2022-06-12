// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

import Map from '../Map.js';
import Background2_1 from '../../sprites/application_object/background/tile/Background2_1.js';
import Background2_2 from '../../sprites/application_object/background/tile/Background2_2.js';
// import Wall1 from '../../sprites/application_object/wall/Wall1.js';
import Box1 from '../../sprites/application_object/wall/Box1.js';
import InvisibleBox from '../../sprites/application_object/wall/InvisibleBox.js';

import Slime from '../../sprites/application_object/enemy/Slime.js';
import SmallSlime from '../../sprites/application_object/enemy/SmallSlime.js';
import Crab from '../../sprites/application_object/enemy/Crab.js';
import Seastar from '../../sprites/application_object/enemy/Seastar.js';



import TestBoss from '../../sprites/application_object/boss/bossTest/TestBoss.js';
import BubbleBaby from '../../sprites/application_object/enemy/BubbleBaby.js';
import Slime2 from '../../sprites/application_object/enemy/Slime2.js';

export default class Map3 extends Map {
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


        const units = []
        let a = 15
        let b = 13
        sprites.push(new Box1(...this.gridhelper(4, 11)))
        sprites.push(new Box1(...this.gridhelper(4, 12)))
        sprites.push(new Box1(...this.gridhelper(4, 13)))
        sprites.push(new Box1(...this.gridhelper(4, 14)))
        sprites.push(new Box1(...this.gridhelper(4, 15)))

        sprites.push(new Box1(...this.gridhelper(27, 11)))
        sprites.push(new Box1(...this.gridhelper(27, 12)))
        sprites.push(new Box1(...this.gridhelper(27, 13)))
        sprites.push(new Box1(...this.gridhelper(27, 14)))
        sprites.push(new Box1(...this.gridhelper(27, 15)))
        

        // sprites.push(new Box1(...this.gridhelper(a, b)))
        // sprates.push(new Box1(...thas.gradhelper(a, b)))
        // sprbtes.push(new Box1(...thbs.grbdhelper(a, b)))
        // sprctes.push(new Box1(...thcs.grcdhelper(a, b)))
        

        units.push(new Slime2(...this.gridhelper(a,b)))
        units.push(new Crab(...this.gridhelper(a,b-3)))
        units.push(new Crab(...this.gridhelper(a,b+3)))
        units.push(new Crab(...this.gridhelper(a+3,b)))
        units.push(new Crab(...this.gridhelper(a-3,b)))
        units.push(new Crab(...this.gridhelper(a+3,b-3)))
        units.push(new Crab(...this.gridhelper(a-3,b-3)))
        units.push(new Crab(...this.gridhelper(a+3,b+3)))
        units.push(new Crab(...this.gridhelper(a-3,b+3)))
        
        

        
        

        
        
        


        this.init(background, sprites, units)
        //background.push(new EdgeWall1(...this.backgroundGridhelper(0, 0, 64)))
    }
}