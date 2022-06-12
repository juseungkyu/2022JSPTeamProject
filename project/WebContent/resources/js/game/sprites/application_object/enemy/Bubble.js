// 적 유닛
// Enemy 상속하고 Collision으로 히트박스 구현

import Enemy from "../../sprite_rule/interaction_sprites/unit/enemy/Enemy.js";
import Collision from "../../sprite_rule/Collision.js";
import EnemyBullet1 from "../bullet/enemy/EnemyBullet.js";
import Crab from "./Crab.js";
import BubbleBaby from "./BubbleBaby.js";

export default class Bubble extends Enemy {
    constructor(x, y) {
        super(x, y,
            [new Collision([{ x: -35, y: -100 }, { x: 35, y: 0 }])],
            {
                'default': [window.imageObject.bubble],
                'die': [window.imageObject.bubble],
            },
            30, 20, 80, [100, 100])
        this.beforeShotTime = new Date().getTime() - 10000

        this.changeDirection(1, 0)
    }

    customOnCollisionEnter = (sprite) => {
        if(!sprite.type.includes('Terrain')){
            return
        }

        const currentTime = new Date().getTime()
        if(currentTime - this.beforeShotTime < 1000){
            return
        }
        this.beforeShotTime = new Date().getTime()
        this.shot.bind(this)()

        // 방향 전환
        const diretion = this.getRandomDirection(this.x, this.y)
        
        this.changeDirection(diretion[0], diretion[1])
    }

    getRandomDirection (currentX, currentY){
        let y = Math.round(Math.random()*3)-2
        let x = Math.round(Math.random()*3)-2

        if(currentY - 200 < 0) {
            y = 1
        } else if(currentY + 200 < 800) {
            y = -1
        }

        if(currentX - 200 < 0) {
            x = 1
        } else if(currentX + 200 < 1024) {
            x = -1
        }

        if(y == 0 && x == 0){
            return this.getRandomDirection(currentX, currentY)
        }

        return [x, y]
    }

    shot(){
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
        pushUnitList(new BubbleBaby(this.x, this.y), this.y)

        setTimeout(() => {
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
        }, 50);
        setTimeout(() => {
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
        }, 100);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }

}