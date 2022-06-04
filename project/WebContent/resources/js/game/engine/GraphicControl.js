export default class GraphicControl {
    constructor() {
        this.init()
    }
    
    init() {
        this.bufferCanvas = document.createElement('canvas')
        this.bufferCtx = this.bufferCanvas.getContext('2d')

        this.gameBox = document.querySelector('#gameBox')

        this.backgroundCtx = this.setCanvas.bind(this)()
        this.ctx = this.setCanvas.bind(this)()
        this.UICtx = this.setCanvas.bind(this)()
    }

    setCanvas() {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        
        canvas.width = 1024
        canvas.height = 800

        this.gameBox.appendChild(canvas)

        return ctx
    }

    drawSprite = (time) => {
        const list = getSpriteList()
        
        this.ctx.clearRect(0,0, 1024, 800)
        for(let sprite of list){
            if(sprite.image){
                let image = sprite.image

            	if(sprite.isHit){
            		this.imageToHitImage.bind(this)(sprite.image)

                    image = this.bufferCanvas
            	}
            	
            	if(sprite.isNoHitTime){
            		sprite.isAlphaTime += parseInt(time)
            		
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
            	
                this.ctx.drawImage(image, sprite.x - sprite.size[0]/2, sprite.y - sprite.size[1], sprite.size[0], sprite.size[1])
            }
        }
    }

    drawMap = (map)=>{
        this.backgroundCtx.clearRect(0,0, 1024, 800)

        for(let background of map.background){
            this.backgroundCtx.drawImage(background.image, background.x, background.y, background.size[0], background.size[1])
        }
    }

    // 이미지 붉게 바꾸기 (피격시 효과)
    imageToHitImage (image){
        const w = image.width
        const h = image.height
        const imageData = image.getContext('2d').getImageData(0,0,w,h)

        let color = 0;

        for(let i = 0; i < imageData.data.length; i++){
            if(color == 0){
                imageData.data[i] = imageData.data[i] + 100 > 255 ? 255 : imageData.data[i] + 100 
            } else if(color < 3){
                imageData.data[i] = imageData.data[i] -100 < 0 ? 0 : imageData.data[i] -100 
            }
            
            // imageData.data[i] = 255

            color++

            if(color >= 4){
                color = 0
            }
        }

        this.bufferCanvas.width = w
        this.bufferCanvas.height = h

        this.bufferCtx.putImageData(imageData,0,0)
    }
}