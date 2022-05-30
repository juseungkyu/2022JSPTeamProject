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
        
        window.requestAnimationFrame(this.frame.bind(this));
    	
    	this.before = timeStamp
    }
}


        