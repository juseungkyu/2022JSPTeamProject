// 이 클래스는 유니티 따라함
// hitBoxType에 nonIgnoreConflicts를 무조건 포함시킴

import NonInteractionSprites from "../NonInteractionSprites.js";

export default class Background extends NonInteractionSprites {
    constructor(x,y, animationImageList, size){
        super(x,y, animationImageList, size)

        this.type.push('Background')
    }
}