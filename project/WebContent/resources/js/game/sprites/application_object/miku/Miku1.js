// 플레이어 캐릭터
// Friendly 상속하고 Collision으로 히트박스 구현

import Friendly from "../../sprite_rule/interaction_sprites/unit/friendly/Friendly.js";
import Collision from "../../sprite_rule/Collision.js";
import PlayerBullet from "../bullet/friendly/PlayerBullet.js";
import DefaultValue from "../../../../constant/DefaultValue.js";
import RankingView from "../../../../util/RankingView.js";

export default class Miku1 extends Friendly {
    constructor() {
        super(400, 400,
            [new Collision([{ x: -10, y: -30 }, { x: 15, y: -15 }])],
            {
                'default': [window.imageObject.mikuStandTemporary1,
                window.imageObject.mikuStandTemporary3],
                'moveRight': [window.imageObject.mikuStandTemporaryBehind1,
                window.imageObject.mikuStandTemporaryBehind2,
                window.imageObject.mikuStandTemporaryBehind3,
                window.imageObject.mikuStandTemporaryBehind4,],
                'hit': [window.imageObject.mikuStandTemporaryBehind1,
                window.imageObject.mikuStandTemporaryBehind2,
                window.imageObject.mikuStandTemporaryBehind3,
                window.imageObject.mikuStandTemporaryBehind4,],
                'die': [window.imageObject.mikuStandTemporary1,
                    window.imageObject.mikuStandTemporary3],
            },
            3, 10, 100, [50, 50])

        this.weaponCount = '∞'
        this.beforeAttackTime = 0
        this.rankingViewer = new RankingView();
    }

    attack = (x, y) => {
        if(this.isDie){
            return
        }
        
        const currentTime = new Date().getTime()

        if (currentTime - this.beforeAttackTime < DefaultValue.attackDelay) {
            return
        }

        this.beforeAttackTime = currentTime

        pushUnitList(new PlayerBullet(this.x, this.y - 15, [x, y]), this.y - 15)
        
    }

    custemReset() {
        this.isDie = true
        const hitEffect = document.querySelector('.front-ground')

        setTimeout(async () => {
            hitEffect.style.transition = '5s'
            hitEffect.classList.add('active')
            hitEffect.style.opacity = '0.9'
            
            await this.rankingViewer.add()
            const data = await this.rankingViewer.view().data

            console.log(data)
        }, 1000);
    }
}