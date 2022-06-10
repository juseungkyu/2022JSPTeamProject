// 적 유닛
// Enemy 상속하고 Collision으로 히트박스 구현

import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";
import EnemyBullet1 from "../bullet/enemy/EnemyBullet.js";

export default class Slime extends Enemy {
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-20, y:-80}, {x:30, y:-30}])],
            {
                'default' : [
                             window.imageObject.mikuStandTemporary3],
                'die' : [window.imageObject.mikuStandTemporary3],
            }, 
            5, 40, 100, [100, 100])

        this.setDirectionTimer = setInterval(() => {
            const x = window.playerSprite.x - this.x
            const y = window.playerSprite.y - this.y
            
            pushUnitList(new EnemyBullet1(this.x, this.y - 15, [x, y]), this.y - 15)
        }, 1000);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }
}