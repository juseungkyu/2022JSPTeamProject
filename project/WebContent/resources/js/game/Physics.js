// UnitList은 unit 같이 물리적인 힘이 있는 객체들을 저장하는 곳

export default class Physics {
    constructor(){
        this.init()
    }

    init(){
        this.dateTime = new Date().getTime()
        this.physicsTimer = setInterval(this.moveControl.bind(this), 20)
    }

    // Unit의 힘을 바탕으로 이동
    // 인터벌로 하니까 자꾸 순서 밀려서 슬로우 먹히길래
    // 인터벌 사이의 시간 측정해서 곱해줌
    moveControl(){
        
        const list = Object.values(window.unitList)

        for(let sprite of list){
            sprite.x += sprite.xForce * this.dateTime * 0.1
            sprite.y += sprite.yForce * this.dateTime * 0.1
            
            // 마찰이라고 칩시다
            sprite.xForce /= 1.4
            sprite.yForce /= 1.4

            if(Math.abs(sprite.xForce) < 10){
                sprite.xForce = 0
            } 
            if(Math.abs(sprite.yForce) < 10){
                sprite.yForce = 0
            } 

            // console.log(sprite.xForce, sprite.yForce)
        }


        this.dateTime = new Date().getTime() * 0.000000000001
    }
}