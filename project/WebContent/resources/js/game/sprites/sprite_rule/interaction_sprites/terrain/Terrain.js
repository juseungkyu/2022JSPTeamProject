// hitBoxType에 nonpass를 무조건 포함시킴 + nonIgnoreConflicts

class Terrain extends InteractionSprites {
    constructor(x,y,vertexList, hitBoxType){
        super(x,y,vertexList, hitBoxType&HitBoxType.nonpass)
        this.type.push('Terrain')
    }
}