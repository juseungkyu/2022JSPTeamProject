// 피아식별 기능 추가

import Friendly from "../../sprite_rule/interaction_sprites/unit/friendly/Friendly.js";
import Collision from "../../sprite_rule/Collision.js";

const Miku1Animation = {
    'default' : [await getImage('/resources/image/test.png')],
}


export default class Miku1 extends Friendly {
    constructor(){
        super(400,400, [new Collision([{x:-50, y:-100}, {x:50, y:0}])], Miku1Animation, 100, 40, 100, [100, 50])
    }
}