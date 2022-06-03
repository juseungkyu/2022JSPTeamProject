import Terrain from "../../../sprite_rule/interaction_sprites/terrain/Terrain.js"
import Collision from "../../../sprite_rule/Collision.js"

export default class LeftWall1 extends Terrain {
    constructor(x,y){
        super(x, y, 
        	[new Collision([{x:-16, y:-32}, {x:16, y:0}])], 
        	{
        	    'default' : [window.imageObject.left_wall1],
        	}, 
        	[32, 48])
    }
}