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

        this.type.push('Unit')
    }

    move = (x, y)=>{
        if(x == 1 && y == 1){
            this.xForce += this.speed/2
            this.yForce += this.speed/2
        } else if(x == -1 && y == -1 ){
            this.xForce -= this.speed/2
            this.yForce -= this.speed/2
        } 
        
        if(x == 1){
            this.xForce += this.speed/2
        } else if(x == -1){
            this.xForce -= this.speed/2
        } else {
            this.xForce /= 2
            
            if(this.xForce < 0.1) {
                this.xForce == 0
            }
        }

        if(y == 1) {
            this.yForce += this.speed/2
        } else if(x == -1){
            this.yForce -= this.speed/2
        } else {
            this.yForce /= 2

            if(this.yForce < 0.1) {
                this.yForce == 0
            }
        }

        const currentSpeed = getForce(this.xForce, this.yForce)

        if(currentSpeed >= this.maxSpeed) {
            if(x == 0) {
                this.xForce /= 1.1
            } else if(y == 0) {
                this.yForce /= 1.1
            }
        }

        console.log(this.xForce, this.yForce)
    }

    
}