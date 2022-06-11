// 적 유닛
// Enemy 상속하고 Collision으로 히트박스 구현

import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";
import EnemyBullet1 from "../bullet/enemy/EnemyBullet.js";

export default class Bubble extends Enemy {
    direction = 2
    constX = 5
    constY = 5
    checkDC = false
    
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-25, y:-50}, {x:25, y:0}])],
            {
                'default' : [window.imageObject.bubble],
                'die' : [window.imageObject.bubble],
            }, 
            20, 20, 80, [100, 100])

        this.setDirectionTimer = setInterval(() => {

            //이 셋을 어디에서 생성해야 하는지를 몰겠음
            //이 셋을 setDirectionTimer가 돌아가는 것과는 별개로 값이 계속 남았다가 밑에 if문을 통해 변경하고 싶은건데
            

            console.log(this.x+" / "+this.y)
            if((this.x <= 200 || this.x >= 900 || this.y <= 200 || this.y >= 750) && this.checkDC === false){
                // 벽쪽에 가까이 닿았을 때 이 이프문으로 들어옴 즉 방향 전환
                
                while(true){
                    const abc = Math.floor(Math.random() * 5 - 1) + 1;
                    //사면 중 어느쪽을 향할 것인지 랜덤으로 추출 1~4 정수
                if(this.direction !== abc){
                    this.direction = abc
                    this.checkDC = true
                    setTimeout(() => {
                        this.checkDC = false
                    }, 1000);
                    break;
                }

                
                }
                

                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [5, 0]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [4, 1]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [3, 2]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [2, 3]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [1, 4]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [0, 5]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-1, 4]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-2, 3]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-3, 2]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-4, 1]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-5, 0]), this.y - 15)

                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [5, 0]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [4, -1]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [3, -2]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [2, -3]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [1, -4]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [0, -5]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-1, -4]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-2, -3]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-3, -2]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-4, -1]), this.y - 15)
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [-5, 0]), this.y - 15)
                


                
                
                
                console.log("directionchange"+this.direction)

            }
            
            if(this.direction===1){
                const y = (this.y - 100) > 0 ? -1 : 1
                const x = (this.x - 500) > 0 ? -1 : 1
                //위
                this.changeDirection(x, y)    
            } else if(this.direction===2){
                const y = (this.y - 400) > 0 ? -1 : 1
                const x = (this.x - 900) > 0 ? -1 : 1
                //오른쪽
                this.changeDirection(x, y)    
            } else if(this.direction===3){
                const y = (this.y - 900) > 0 ? -1 : 1
                const x = (this.x - 500) > 0 ? -1 : 1
                //밑
                this.changeDirection(x, y)    
            } else if(this.direction===4){
                const y = (this.y - 400) > 0 ? -1 : 1
                const x = (this.x - 100) > 0 ? -1 : 1
                //왼쪽
                this.changeDirection(x, y)    
            }


            
            
            
            
            
        }, 10);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }

}