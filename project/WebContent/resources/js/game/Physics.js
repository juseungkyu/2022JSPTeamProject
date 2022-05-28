// UnitList은 unit 같이 물리적인 힘이 있는 객체들을 저장하는 곳

export default class Physics {
    constructor(){
        this.init()
    }

    init(){
        this.UnitList = {}

        this.dateTime = new Date().getTime()
        this.physicsTimer = setInterval(this.moveControl.bind(this), 100)
    }

    pushUnitList = (sprite)=>{
        const id = new Date().getTime() * 0.000000000001
        this.UnitList[id] = sprite

        return id 
    }

    deleteUnitList = (id)=>{
        delete this.UnitList[id]
    }

    // Unit의 힘을 바탕으로 이동
    // 인터벌로 하니까 자꾸 순서 밀려서 슬로우 먹히길래
    // 인터벌 사이의 시간 측정해서 곱해줌
    moveControl(){
        
        const list = Object.values(this.UnitList)

        for(let sprite of list){
            sprite.x += sprite.xForce * this.dateTime
            sprite.y += sprite.yForce * this.dateTime
        }


        this.dateTime = new Date().getTime() * 0.000000000001
    }
}