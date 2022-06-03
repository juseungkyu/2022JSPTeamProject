// 플레이어 캐릭터
// Friendly 상속하고 Collision으로 히트박스 구현

import Friendly from "../../sprite_rule/interaction_sprites/unit/friendly/Friendly.js";
import Collision from "../../sprite_rule/Collision.js";

export default class Miku1 extends Friendly {
    constructor(){
        super(400,400, 
            [new Collision([{x:-10, y:-30}, {x:15, y:-15}])],
            {
                'default' : [window.imageObject.mikuStandTemporary1, 
                             window.imageObject.mikuStandTemporary3],
                'moveRight' : [window.imageObject.mikuStandTemporaryBehind1,
                               window.imageObject.mikuStandTemporaryBehind2,
                               window.imageObject.mikuStandTemporaryBehind3,
                               window.imageObject.mikuStandTemporaryBehind4,],
                'hit' : [window.imageObject.mikuStandTemporaryBehind1,
                                window.imageObject.mikuStandTemporaryBehind2,
                                window.imageObject.mikuStandTemporaryBehind3,
                                window.imageObject.mikuStandTemporaryBehind4,]
            }, 
            3, 10, 100, [50, 50])

        this.weaponCount = '∞'
    }
}