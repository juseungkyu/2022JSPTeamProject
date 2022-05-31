// 피아식별 기능 추가

import Terrain from "../../sprite_rule/interaction_sprites/terrain/Terrain.js"
import Collision from "../../sprite_rule/Collision.js"

const wall1Image = {
    'default' : [await getImage('/resources/image/test.png')],
}

export default class Wall1 extends Terrain {
    constructor(x, y){
        super(x, y, [new Collision([{x:-50, y:-100}, {x:50, y:0}])], wall1Image, [100, 50])
    }
}