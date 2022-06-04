// 피아식별 기능 추가

import Unit from "../Unit.js";
import DefaultValue from "../../../../../../constant/DefaultValue.js";

export default class Enemy extends Unit {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)

        this.type.push('Enemy')
    }

    onCollisionEnter = (sprite, collision)=>{
        if(sprite.type.includes('FriendlyBullet')){
            this.underAttack(sprite)
        }
    }

    underAttack = (sprite)=>{
        this.hp -= sprite.damage
        this.isHit = true

        clearTimeout(this.noHitTimer)
        clearTimeout(this.hitTimer)

        this.hitTimer = setTimeout(()=>{
            this.isHit = false
        }, DefaultValue.hitAnimationTime) 
    }
}