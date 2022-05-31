// 이 클래스는 유니티 따라함
// hitBoxType에 nonIgnoreConflicts를 무조건 포함시킴

import Sprites from "../Sprites.js";
import HitBoxType from '/resources/js/constant/HitBoxType.js';

export default class NonInteractionSprites extends Sprites {
    constructor(x,y, animationImageList, size){
        super(x,y, [], HitBoxType.nonIgnoreConflicts, animationImageList, size)

        this.type.push('NonInteractionSprites')
    }
}