// hitBoxType에 nonpass를 무조건 포함시킴 + nonIgnoreConflicts
import InteractionSprites from "../InteractionSprites";
import {HitBoxType} from '/resources/js/constant/HitBoxType.js';

export default class Terrain extends InteractionSprites {
    constructor(x,y,vertexList, hitBoxType, animationImageList){
        super(x,y,vertexList, hitBoxType&HitBoxType.nonpass, animationImageList)
        this.type.push('Terrain')
    }
}