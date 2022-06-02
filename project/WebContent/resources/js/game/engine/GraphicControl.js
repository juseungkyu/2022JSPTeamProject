export default class GraphicControl {
    constructor() {
        this.init()
    }

    setCanvas() {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        
        canvas.width = 1024
        canvas.height = 800

        this.gameBox.appendChild(canvas)

        return ctx
    }
    
    init() {
        this.gameBox = document.querySelector('#gameBox')

        this.backgroundCtx = this.setCanvas.bind(this)()
        this.ctx = this.setCanvas.bind(this)()
        this.UICtx = this.setCanvas.bind(this)()
    }

    drawSprite = (time) => {
        const list = getSpriteList()
        
        this.ctx.clearRect(0,0, 1024, 800)
        for(let sprite of list){
            if(sprite.image){
            	if(sprite.isHit){
            		
            	}
            	
            	if(sprite.isNoHitTime){
            		sprite.isAlphaTime += parseInt(time)
//            		console.log(sprite.isAlphaTime, time)
            		
                    if(sprite.isAlphaTime > 100) {
                        this.ctx.globalAlpha = 0.5;
                        
                        if(sprite.isAlphaTime > 200){
                        	sprite.isAlphaTime = 0
                        }
                    } else {
                        this.ctx.globalAlpha = 0.1;
                    }
            	} else {
                    this.ctx.globalAlpha = 1;
            	}
            	
                this.ctx.drawImage(sprite.image, sprite.x - sprite.size[0]/2, sprite.y - sprite.size[1], sprite.size[0], sprite.size[1])
            }
        }
    }

    drawMap = (map)=>{
        this.backgroundCtx.clearRect(0,0, 1024, 800)

        for(let background of map.background){
            this.backgroundCtx.drawImage(background.image, background.x, background.y, background.size[0], background.size[1])
        }
    }
}