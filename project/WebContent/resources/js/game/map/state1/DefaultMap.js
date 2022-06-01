// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

import Map from '../Map.js';
import Tile1 from '../../sprites/application_object/background/tile/Tile1.js';
import Wall1 from '../../sprites/application_object/wall/Wall1.js';
import Slime from '../../sprites/application_object/enemy/Slime.js';

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
            sprites.push(new Wall1(...this.gridhelper(i, 0)))
            sprites.push(new Wall1(...this.gridhelper(i, 24)))
        }

        for(let i = 1; i < 24; i++){
            sprites.push(new Wall1(...this.gridhelper(0, i)))
            sprites.push(new Wall1(...this.gridhelper(31, i)))
        }

        sprites.push(new Wall1(...this.gridhelper(10, 15)))
        sprites.push(new Wall1(...this.gridhelper(11, 15)))
        sprites.push(new Wall1(...this.gridhelper(12, 15)))
        sprites.push(new Wall1(...this.gridhelper(12, 16)))

        // sprites.push(new Slime(...this.gridhelper(20, 20)))


        this.init(background, sprites)
    }
}