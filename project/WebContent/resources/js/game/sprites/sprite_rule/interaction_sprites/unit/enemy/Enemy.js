// 피아식별 기능 추가

import Unit from "../Unit.js";

export default class Enemy extends Unit {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)

        this.type.push('Enemy')
    }

    onCollisionEnter = (obj)=>{
        // if(obj.sprites.type.includes('Friendly')){
        //     this.onCollisionByEnemyFriendly()
        // }
    }

    onCollisionByEnemyFriendly = (obj)=>{
        if(obj.x > this.x) {
            this.xForce -= 100
        }  else {
            this.xForce += 100
        }

        if(obj.y > this.y) {
            this.yForce -= 100
        }  else {
            this.yForce += 100
        }
    }
}