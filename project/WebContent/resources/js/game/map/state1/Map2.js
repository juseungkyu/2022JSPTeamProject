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
import Seastaronly from '../../sprites/application_object/enemy/Seastaronly.js';
import Crab from '../../sprites/application_object/enemy/Crab.js';
import Seastar from '../../sprites/application_object/enemy/Seastar.js';



import TestBoss from '../../sprites/application_object/boss/bossTest/TestBoss.js';
import BubbleBaby from '../../sprites/application_object/enemy/BubbleBaby.js';

export default class Map2 extends Map {
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


        let a = 5
        let b = 5
        const units = []
        for(let i = 5; i < 24; i++){
            for(let j = 2; j < 23; j = j+3){
                sprites.push(new Box1(...this.gridhelper(i, j)))
            }
            
                units.push(new BubbleBaby(...this.gridhelper(25, i)))
            
            
            if(i%10==0){
                units.push(new Seastar(...this.gridhelper(26, i)))
            }
            
        }

        
        
        

        
        

        
        
        


        this.init(background, sprites, units)
        //background.push(new EdgeWall1(...this.backgroundGridhelper(0, 0, 64)))
    }
}