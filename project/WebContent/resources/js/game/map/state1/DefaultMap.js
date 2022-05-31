// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

import Map from '../Map.js';
import Tile1 from '../../sprites/application_object/background/tile/Tile1.js';
import Wall1 from '../../sprites/application_object/wall/Wall1.js';

export default class DefaultMap extends Map {
    constructor() {
        super()

        const background = []

        for(let j = 0; j < 7; j++){
            for(let i = 0; i < 8; i++){
                background.push(new Tile1(i*128, j*128))
            }
        }

        const wall1 = new Wall1(0, 0)
        const wall2 = new Wall1(50, 0)
        const wall3 = new Wall1(100, 0)
        const wall4 = new Wall1(150, 0)
        const wall5 = new Wall1(200, 0)

        const sprites = [wall1, wall2, wall3, wall4, wall5]

        this.init(background, sprites)
    }
}