import Background from "../../../../sprite_rule/non_interaction_sprites/background/Background.js"

export default class EdgeWall1Right extends Background {
    constructor(x, y) {
        super(x, y, {'default' : [window.imageObject.edgeWall1_right]}, [16, 200])
    }
} 