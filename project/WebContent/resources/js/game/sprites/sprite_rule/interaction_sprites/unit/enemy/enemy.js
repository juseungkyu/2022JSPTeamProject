// 피아식별 기능 추가

class Enemy extends Unit {
    constructor(x,y,vertexList, hitBoxType, hp){
        super(x,y,vertexList, hitBoxType, hp)

        this.type.push('Enemy')
    }

    customOnCollisionEnter = (obj)=>{

    }

    onCollisionEnter = (obj)=>{
        if(obj.sprites.type.includes('Unit')){
            this.onCollisionEnterByUnit()
        }
    }

    onCollisionEnterByUnit = ()=>{

    }
}