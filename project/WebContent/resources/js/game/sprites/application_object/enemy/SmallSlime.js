// 적 유닛
// Enemy 상속하고 Collision으로 히트박스 구현

import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";
import EnemyBullet1 from "../bullet/enemy/EnemyBullet.js";

export default class SmallSlime extends Enemy {
    constructor(x, y){
        super(x, y, 
            [new Collision([{x:-20, y:-80}, {x:30, y:-30}])],
            {
                'default' : [
                             window.imageObject.mikuStandTemporary3],
                'die' : [window.imageObject.mikuStandTemporary3],
            }, 
            5, 40, 100, [50, 50])

        this.setDirectionTimer = setInterval(() => {
            //1안 플레이어 위치를 정확하게 기억하여 한 발을 발사하는 방식
            //2안 랜덤하게 열발을 흩뿌리는 방식
            //3안 눈물 간 간격이 일정한 산탄 방식

            
            //4안 일정한 간격으로 발싸하는 머신건 방식
            
            for(let j = 0; j < 3; j++){
                let aaaa = Math.random() * 50 - 100
                console.log(aaaa)
                
                setTimeout(() => {
                const x = window.playerSprite.x - this.x
                const y = window.playerSprite.y - this.y
                pushUnitList(new EnemyBullet1(this.x, this.y - 15, [x, y]), this.y - 15)
                }, j*100)
            }

        }, 1000);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }
}