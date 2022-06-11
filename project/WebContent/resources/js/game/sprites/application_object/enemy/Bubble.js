// 적 유닛
// Enemy 상속하고 Collision으로 히트박스 구현

import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";

export default class Bubble extends Enemy {
    
    
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-25, y:-50}, {x:25, y:0}])],
            {
                'default' : [window.imageObject.bubble],
                'die' : [window.imageObject.bubble],
            }, 
            20, 3, 1000, [100, 100])

        this.setDirectionTimer = setInterval(() => {

            //이 셋을 어디에서 생성해야 하는지를 몰겠음
            //이 셋을 setDirectionTimer가 돌아가는 것과는 별개로 값이 계속 남았다가 밑에 if문을 통해 변경하고 싶은건데
            direction = 3
            constX = 1
            constY = 1
            //


            console.log(this.x + " " + this.y)
            if(this.x < 3 && this.x > 20 && this.y < 3 && this.y < 15){
                // 벽쪽에 가까이 닿았을 때 이 이프문으로 들어옴 즉 방향 전환

                this.direction = Math.floor(Math.random() * 5 - 1) + 1
                //사면 중 어느쪽을 향할 것인지 랜덤으로 추출 1~4 정수

                this.constX = Math.floor(Math.random() * 20 - 3) + 3
                this.constY = Math.floor(Math.random() * 20 - 3) + 3
                //그 사면또한 결국 선이므로 점인 몬스터가 한 사면으로 간다고 해도 여러가지 장소가 있는데 그것을 랜덤으로 추출
                
                
            } else if(direction===1){
                const y = (this.y - 1) > 0 ? -1 : 1
                const x = (this.x - constX) > 0 ? -1 : 1
                //위
            } else if(direction===2){
                const y = (this.y - constY) > 0 ? -1 : 1
                const x = (this.x - 20) > 0 ? -1 : 1
                //오른쪽
            } else if(direction===3){
                const y = (this.y - 15) > 0 ? -1 : 1
                const x = (this.x - constX) > 0 ? -1 : 1
                //밑
            } else if(direction===4){
                const y = (this.y - constY) > 0 ? -1 : 1
                const x = (this.x - 3) > 0 ? -1 : 1
                //왼쪽
            }
            
            
            
            
            this.changeDirection(x, y)    
        }, 10);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }

}