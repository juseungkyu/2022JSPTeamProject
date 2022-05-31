import GraphicControl from './GraphicControl.js';
import Physics from './Physics.js';

export default class Enigne {
    constructor() {
        this.basicPhysics = new Physics()
        this.graph = new GraphicControl()
        this.before = 0
        window.requestAnimationFrame(this.frame.bind(this));
    }

    frame(timeStamp) {
        this.basicPhysics.moveControl(timeStamp - this.before)
        this.graph.drawSprite()
        
    	this.before = timeStamp
        window.requestAnimationFrame(this.frame.bind(this));
    }

    setMap = (map)=>{
        for(let sprite of map.sprites){
            pushSpriteList(sprite, sprite.y)
        }
        
        this.graph.drawMap(map)
    }
}


        