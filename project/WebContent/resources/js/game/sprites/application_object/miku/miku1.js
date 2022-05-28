// 피아식별 기능 추가

import Friendly from "../../sprite_rule/interaction_sprites/unit/friendly/Friendly.js";

const Miku1Animation = {
    'default' : [await getImage('/resources/image/test.png')],
}

export default class Miku1 extends Friendly {
    constructor(){
        super(100,100, [], Miku1Animation, 100, 40, 200)
    }
}