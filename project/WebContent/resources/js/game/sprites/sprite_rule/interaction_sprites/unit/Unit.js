// hitBoxType에 pass를 무조건 포함시킴 + nonIgnoreConflicts
// 이것도 유니티 따라함.

import InteractionSprites from "../InteractionSprites.js";
import HitBoxType from '/resources/js/constant/HitBoxType.js';

export default class Unit extends InteractionSprites {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed){
        super(x,y,collisionList, HitBoxType.pass, animationImageList)
        this.hp = hp
        this.speed = speed
        this.maxSpeed = maxSpeed 

        this.xForce = 0
        this.yForce = 0

        this.xDirection = 0
        this.yDriection = 0

        this.type.push('Unit')

        this.isMoving = true
        
        this.moveTimer = setInterval(this.move.bind(), 100)
        this.stopMoving()
    }

    stopMoving = ()=>{
        this.isMoving = false
        clearInterval(this.moveTimer)
    }

    startMoving = ()=>{
        this.isMoving = true
        this.moveTimer = setInterval(this.move.bind(), 10)
    }

    changeDirection = (x,y)=>{
        if(!this.isMoving){
            this.startMoving()
        }

        this.xDirection = x
        this.yDirection = y
    }

    move = ()=>{
        if(this.xDirection == 1 && this.yDirection == 1){
            this.xForce += this.speed/2
            this.yForce += this.speed/2
        } else if(this.xDirection == -1 && this.yDirection == -1 ){
            this.xForce += this.speed/2
            this.yForce += this.speed/2
        } 
        
        if(this.xDirection == 1){
            this.xForce += this.speed
        } else if(this.xDirection == -1){
            this.xForce -= this.speed
        }

        if(this.yDirection == 1) {
            this.yForce += this.speed
        } else if(this.yDirection == -1){
            this.yForce -= this.speed
        }

        const currentSpeed = getForce(this.xForce, this.yForce)

        if(currentSpeed >= this.maxSpeed) {
            const ratio = this.maxSpeed / currentSpeed 

            this.xForce *= ratio
            this.yForce *= ratio
        }

        console.log(this.xForce, this.yForce)
    }
}