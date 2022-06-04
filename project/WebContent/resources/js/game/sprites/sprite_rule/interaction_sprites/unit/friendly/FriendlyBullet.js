// 피아식별 기능 추가

import Friendly from "./Friendly.js";

export default class FriendlyBullet extends Friendly {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size, damage){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)
        this.damage = damage
    }

    onCollisionEnter = (sprite, collision)=>{
        if(sprite.type.includes('Friendly')){
            return
        }
        this.isNoHitTime = true
        this.animationTypeChange('hit')

        setTimeout(()=>{
            this.deleted = true
        }, 500)
    }
}