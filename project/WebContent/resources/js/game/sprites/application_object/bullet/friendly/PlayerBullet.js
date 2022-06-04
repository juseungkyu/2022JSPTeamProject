// 피아식별 기능 추가

import FriendlyBullet from "../../../sprite_rule/interaction_sprites/unit/friendly/FriendlyBullet.js"
import Collision from "../../../sprite_rule/Collision.js"

export default class PlayerBullet extends FriendlyBullet {
    constructor(x,y, direction){
        super(x,y,
            [new Collision([{x:-5, y:-10}, {x:5, y:0}])],
            {
                'default' : [window.imageObject.test],
                'hit' : [window.imageObject.test],
            },
            1, 
            40, 
            200, 
            [10, 10], 1)
        
        this.changeDirection(direction[0], direction[1]) 
    }
}