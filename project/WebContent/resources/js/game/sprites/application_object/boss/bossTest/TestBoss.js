import Boss from "../Boss.js"
import TestBossBody from "./TestBossBody.js"

export default class TestBoss extends Boss {
    constructor(x, y) {
        super(x, y,
            [
                {
                    x: -20,
                    y: 20,
                    sprite: new TestBossBody(x - 20, y + 20)
                },
                {
                    x: 20,
                    y: 5,
                    sprite: new TestBossBody(x + 20, y + 5)
                },
            ], 3, 1000)

        this.setDirectionTimer = setInterval(() => {
            const x = (this.x - window.playerSprite.x) > 0 ? -1 : 1
            const y = (this.y - window.playerSprite.y) > 0 ? -1 : 1

            this.changeDirection(x, y)
        }, 10);
    }

    custemReset() {
        clearInterval(this.setDirectionTimer)
    }
}