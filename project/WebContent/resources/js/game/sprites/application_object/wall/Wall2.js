import Terrain from "../../sprite_rule/interaction_sprites/terrain/Terrain.js"
import Collision from "../../sprite_rule/Collision.js"

export default class Wall2 extends Terrain {
    constructor(x,y){
        super(x, y, 
        	[new Collision([{x:-50, y:-100}, {x:50, y:0}])], 
        	{
        	    'default' : [window.imageObject.wall2],
        	}, 
        	[32, 32])
    }
}