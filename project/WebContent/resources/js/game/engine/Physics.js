// UnitList은 unit 같이 물리적인 힘이 있는 객체들을 저장하는 곳

import HitBoxType from '/resources/js/constant/HitBoxType.js';

export default class Physics {
    constructor(){
        this.init()

        document.querySelector('body').appendChild(this.canvas)
    }

    init(){
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    hitBoxCheck(unit, sprite){
        for(let unitHitbox of unit.collisionList){
            const x1 = unit.x + unitHitbox.vertexList[0].x
            const y1 = unit.y + unitHitbox.vertexList[0].y
            const x2 = unit.x + unitHitbox.vertexList[1].x
            const y2 = unit.y + unitHitbox.vertexList[1].y

            for(let spriteHitbox of sprite.collisionList){
                const spriteX1 = sprite.x + spriteHitbox.vertexList[0].x
                const spriteY1 = sprite.y + spriteHitbox.vertexList[0].y
                const spriteX2 = sprite.x + spriteHitbox.vertexList[1].x
                const spriteY2 = sprite.y + spriteHitbox.vertexList[1].y
                
                
                if(!(x2 < spriteX1 || x1 > spriteX2 
                  ||y1 > spriteY2 || y2 < spriteY1)){
                    return {x1, y1, x2, y2, spriteX1, spriteY1, spriteX2, spriteY2, unitHitbox, spriteHitbox}
                }
            }
        }

        return false
    }
    
    hitDirectionCheck(unit, beforeX, beforeY, {spriteX1, spriteY1, spriteX2, spriteY2, unitHitbox}){
        let x1 = beforeX + unitHitbox.vertexList[0].x
        let x2 = beforeX + unitHitbox.vertexList[1].x

        let y1 = beforeY + unitHitbox.vertexList[0].y
        let y2 = beforeY + unitHitbox.vertexList[1].y

        // x좌표가 beforeX 일때 충돌 안함 & y축은 이미 충돌 했었음  = x축 문제
        if((x2 < spriteX1 || x1 > spriteX2) & !(y1 > spriteY2 || y2 < spriteY1)){
            unit.x = beforeX
            unit.xForce = 0
        }
        
        // y좌표가 beforeY 일때 충돌 안함 & x축은 이미 충돌 했었음  = y축 문제
        if((y1 > spriteY2 || y2 < spriteY1) & !(x2 < spriteX1 || x1 > spriteX2)){
        	unit.y = beforeY
            unit.yForce = 0
        }
    }

    // Unit의 힘을 바탕으로 이동
    // 인터벌로 하니까 자꾸 순서 밀려서 슬로우 먹히길래
    // 인터벌 사이의 시간 측정해서 곱해줌
    moveControl = (timeStamp) => {
        
        const unitList = getUnitList()
        const spriteList = getSpriteList()

        for(let unit of unitList){
            if(unit.deleted){
                if(unit.deleted === true){
                    unit.deleted = 1
                    deleteUnitList(unit, unit.y)
                }
                
                continue
            }

            const beforeY = unit.y
            const beforeX = unit.x

            unit.x += parseInt(unit.xForce * timeStamp * 0.005)
            unit.y += parseInt(unit.yForce * timeStamp * 0.005)

            // 충돌처리
            for(let sprite  of spriteList){
                // 배경 등 상호작용이 없는 스프라이트는 무시
                if(sprite.hitBoxType & HitBoxType.nonIgnoreConflicts == HitBoxType.nonIgnoreConflicts){
                    continue
                }
                // 자신과 비교하는 걸 막아줌              
                if(unit == sprite){
            		continue
                }

                let isContact = this.hitBoxCheck.bind(this)(unit, sprite)

                if(isContact){
                    // 넘어갈 수 없는 스프라이트 일때
                    if((sprite.hitBoxType & HitBoxType.pass) != HitBoxType.pass){
                    	// 넘어가지는 걸 막음        	
                    	this.hitDirectionCheck.bind(this)(unit, beforeX, beforeY, isContact)
                    	
                    	unit.onCollisionEnter(sprite, isContact.unitHitbox)
                    	sprite.onCollisionEnter(unit, isContact.spriteHitbox)
                    } else {
                        // 각자 충돌처리를 해줌 (충돌한 상대, 충돌한 히트박스 전달)
                    	if(!unit.isNoHitTime && !sprite.isNoHitTime) {
                    		unit.onCollisionEnter(sprite, isContact.unitHitbox)
                        	sprite.onCollisionEnter(unit, isContact.spriteHitbox)
                    	}
                    }
                }
            }

            if(beforeY != unit.y){
                swapUnitPoint(unit, beforeY, unit.y)
            }
            
            // 마찰력
            unit.xForce /= 1+ timeStamp * 0.01
            unit.yForce /= 1+ timeStamp * 0.01

            if(Math.abs(unit.xForce) < 5){
                unit.xForce = 0
            } 
            if(Math.abs(unit.yForce) < 5){
                unit.yForce = 0
            } 

            // console.log(sprite.xForce, sprite.yForce)
        }
    }
}