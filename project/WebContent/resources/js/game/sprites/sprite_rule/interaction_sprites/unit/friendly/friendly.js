// 피아식별 기능 추가

import Unit from "../Unit";

export default class Friendly extends Unit {
    constructor(x,y,vertexList, hitBoxType, animationImageList, hp){
        super(x,y,vertexList, hitBoxType &HitBoxType.pass, animationImageList, hp)

        this.type.push('Friendly')
    }

    
}