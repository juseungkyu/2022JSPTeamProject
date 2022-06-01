// 피아식별 기능 추가

import Unit from "../Unit.js";

export default class Friendly extends Unit {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)

        this.type.push('Friendly')
    }

    onCollisionEnter = (sprite, collision)=>{
        if(sprite.type.includes('Enemy')){
            this.onCollisionByEnemy(sprite)
        }
    }

    onCollisionByEnemy= (sprite)=>{
        this.x += (this.x - sprite.x)*2
        this.y += (this.y - sprite.y)*2
    }
}