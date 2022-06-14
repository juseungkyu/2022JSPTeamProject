// 적 유닛
// Enemy 상속하고 Collision으로 히트박스 구현

import Enemy from "../../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../../sprite_rule/Collision.js";
import EnemyBullet1 from "../../bullet/enemy/EnemyBullet.js";

export default class GreenCrab extends Enemy {
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-100, y:-130}, {x:100, y:20}])],
            {
                'default' : [window.imageObject.greenCrab1,
                            window.imageObject.greenCrab2,
                            window.imageObject.greenCrab3,
                            window.imageObject.greenCrab4],
                'die' : [window.imageObject.greenCrab1,
                        window.imageObject.greenCrab2,
                        window.imageObject.greenCrab3,
                        window.imageObject.greenCrab4],
            }, 
            50, 40, 100, [300, 200])

        this.isGreenCrab = true
    }

    custemReset() {
        
    }
}