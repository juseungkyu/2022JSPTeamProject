// hitBoxType에 pass를 무조건 포함시킴 + nonIgnoreConflicts
// 이것도 유니티 따라함.

import InteractionSprites from "../InteractionSprites.js";
import HitBoxType from '/resources/js/constant/HitBoxType.js';

export default class Unit extends InteractionSprites {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size){
        super(x,y,collisionList, HitBoxType.pass, animationImageList, size)
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
        clearInterval(this.moveTimer)
        this.isMoving = false
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
    	console.log(this.xDirection, this.yDirection)
    	
        this.xForce += this.speed * this.xDirection
        this.yForce += this.speed * this.yDirection

        console.log(this.xForce)
        
        const currentSpeed = getForce(this.xForce, this.yForce)

        if(currentSpeed >= this.maxSpeed) {
            const ratio = this.maxSpeed / currentSpeed 

            this.xForce *= ratio
            this.yForce *= ratio
        }
    }
}