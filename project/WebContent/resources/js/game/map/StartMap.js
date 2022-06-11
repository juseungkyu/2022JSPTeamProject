// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

import Map from '../Map.js';
import Tile1 from '../../sprites/application_object/background/tile/Tile1.js';
// import Wall1 from '../../sprites/application_object/wall/Wall1.js';
import CenterWall1 from '../../sprites/application_object/wall/wall1/CenterWall1.js';
import LeftWall1 from '../../sprites/application_object/wall/wall1/LeftWall1.js';
import RightWall1 from '../../sprites/application_object/wall/wall1/RightWall1.js';

export default class DefaultMap extends Map {
    constructor() {
        super()

        const background = []

        for(let j = 0; j < 7; j++){
            for(let i = 0; i < 8; i++){
                background.push(new Tile1(i*128, j*128))
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

        this.init(background, sprites, units)
    }
}