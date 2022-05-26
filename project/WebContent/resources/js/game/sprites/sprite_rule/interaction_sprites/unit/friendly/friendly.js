// 피아식별 기능 추가

class Friendly extends Unit {
    constructor(x,y,vertexList, hitBoxType, hp){
        super(x,y,vertexList, hitBoxType&HitBoxType.pass, hp)

        this.type.push('Friendly')
    }

    
}