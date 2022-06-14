import Boss from "../Boss.js"
import Left from "./Left.js"
import Right from "./Right.js"

import GreenCrab from "../../enemy/GreenCrab.js"

export default class HermitCrab extends Boss {
    constructor(x, y) {
        super(x, y,
            [
                {
                    x: -20,
                    y: 20,
                    sprite: new Left(x - 20, y + 20)
                },
                {
                    x: 20,
                    y: 20,
                    sprite: new Right(x + 20, y + 20)
                },
                {
                    x: 0,
                    y: 0,
                    sprite: new GreenCrab(x + 0, y)
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