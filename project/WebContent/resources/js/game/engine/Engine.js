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
    	const time = timeStamp - this.before
    	
        this.basicPhysics.moveControl(time)
        this.graph.drawSprite(time)
        
    	this.before = timeStamp
        window.requestAnimationFrame(this.frame.bind(this));
    }

    setMap = (map)=>{
        for(let sprite of map.sprites){
            pushSpriteList(sprite, sprite.y)
        }
        
        for(let unit of map.units){
        	pushUnitList(unit, unit.y)
        }
        
        this.graph.drawMap(map)
    }
}


        