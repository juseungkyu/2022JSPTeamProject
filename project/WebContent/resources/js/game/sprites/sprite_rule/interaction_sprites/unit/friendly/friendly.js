// 피아식별 기능 추가

import Unit from "../Unit.js";

export default class Friendly extends Unit {
    constructor(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size){
        super(x,y,collisionList, animationImageList, hp, speed, maxSpeed, size)

        this.type.push('Friendly')
    }

    
}