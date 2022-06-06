// 스프라이트 여러개가 합쳐져서 1개의 보스가 됨
// enemyList = [{
//    'x' : -10,
//    'y' : 30
//    'sprite' : new Enemy()
// }]

import Unit from "../../sprite_rule/interaction_sprites/unit/Unit.js"
import Collision from "../../sprite_rule/Collision.js"

export default class Boss extends Unit{
    constructor(x,y, enemyList, speed, maxSpeed){
        super(x,y,
            [new Collision([{x:-20, y:-40}, {x:20, y:0}])],
            {
                'default' : [window.imageObject.test]
            }, 10000, speed, maxSpeed, [1, 1]
        )

        this.type.push('Boss')

        this.x = x
        this.y = y
        this.enemyList = enemyList
        for(let enemy of this.enemyList){
            enemy.sprite.setBoss(this)
        }
    }

    checkBossDie = (dieSprite)=>{

        for(let enemy of this.enemyList){
            if(!enemy.sprite.isDie){
                return
            }
        }
        console.log('hi')

        deleteUnitList(this, this.y)
    }
}