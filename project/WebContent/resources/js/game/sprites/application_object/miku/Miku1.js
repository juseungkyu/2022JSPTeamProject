// 피아식별 기능 추가

import Friendly from "../../sprite_rule/interaction_sprites/unit/friendly/Friendly.js";
import Collision from "../../sprite_rule/Collision.js";

export default class Miku1 extends Friendly {
    constructor(){
        super(400,400, 
            [new Collision([{x:-10, y:-40}, {x:15, y:-20}])],
            {
                'default' : [window.imageObject.mikuStandTemporary1, 
                             window.imageObject.mikuStandTemporary2],
                'moveRight' : [window.imageObject.mikuStandTemporaryBehind1,
                               window.imageObject.mikuStandTemporaryBehind2,
                               window.imageObject.mikuStandTemporaryBehind3,
                               window.imageObject.mikuStandTemporaryBehind4,]
            }, 
            100, 40, 100, [50, 50])
    }
}