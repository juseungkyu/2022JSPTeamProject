// 피아식별 기능 추가

import Unit from "../Unit.js";
import HitBoxType from '/resources/js/constant/HitBoxType.js';

export default class Enemy extends Unit {
    constructor(x,y,collisionList, hitBoxType, animationImageList, hp){
        super(x,y,collisionList, hitBoxType, animationImageList, hp)

        this.type.push('Enemy')
    }

    onCollisionEnter = (obj)=>{
        if(obj.sprites.type.includes('Unit')){
            this.onCollisionEnterByUnit()
        }
    }

    onCollisionEnterByUnit = (obj)=>{

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