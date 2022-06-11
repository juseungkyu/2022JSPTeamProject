// 피아식별 기능 추가

import Enemy from "./Enemy.js";

export default class EnemyBullet extends Enemy {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size, distance){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)

        this.type.push('EnemyBullet')
        this.type.push('Bullet')

        const ratio = maxSpeed / (Math.abs(distance[0]) + Math.abs(distance[1]))

        this.xForce = ratio * distance[0]
        this.yForce = ratio * distance[1]  
    }

    onCollisionEnter = (sprite, collision)=>{
        if(this.deleted) {
            return
        }
        if(sprite.type.includes('Enemy')){
            return
        }
        if(sprite.type.includes('Boss')){
            return
        }
        if(sprite.type.includes('Bullet')){
            return
        }
        this.isNoHitTime = true
        this.animationTypeChange('hit')
        this.stopMoving()
        this.xForce = 0
        this.yForce = 0

        this.setEffectSize.bind(this)()

        setTimeout(()=>{
            this.deleted = true
        }, 500)
    }

    setEffectSize (){

    }
}