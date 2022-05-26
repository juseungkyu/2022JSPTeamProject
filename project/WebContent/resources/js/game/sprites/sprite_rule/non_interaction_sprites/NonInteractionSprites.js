// 이 클래스는 유니티 따라함
// hitBoxType에 nonIgnoreConflicts를 무조건 포함시킴

class NonInteractionSprites extends Sprites {
    constructor(x,y,vertexList, hitBoxType){
        super(x,y,vertexList, hitBoxType&HitBoxType.nonIgnoreConflicts)

        this.type.push('NonInteractionSprites')
    }

    // 나중에 충돌한 스프라이트 정보를 받아올 것 같은데 
    // 다른거 받아올 수 있으니까 일단 obj라고 표현함
    OnCollisionEnter = (obj) => {

    }

}