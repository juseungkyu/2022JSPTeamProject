// 적 유닛
// Enemy 상속하고 Collision으로 히트박스 구현

import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";

export default class Slime extends Enemy {
    constructor(){
        super(400,400, 
            [new Collision([{x:-20, y:-80}, {x:30, y:-30}])],
            {
                'default' : [window.imageObject.test, 
                             window.imageObject.mikuStandTemporary2],
            }, 
            100, 40, 100, [100, 100])
    }
}