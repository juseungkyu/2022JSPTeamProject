export default class GraphicControl {
    constructor() {
        this.init()
    }
    
    init() {
        this.bufferCanvas = document.createElement('canvas')
        this.bufferCtx = this.bufferCanvas.getContext('2d')

        this.gameBox = document.querySelector('#gameBox')

        this.backgroundCtx = this.setCanvas(gameBox)
        this.ctx = this.setCanvas(gameBox)
        this.UICtx = this.setCanvas(gameBox)
    }

    // 캔버스 로딩
    setCanvas(gameBox) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        
        canvas.width = 1024
        canvas.height = 800

        gameBox.appendChild(canvas)

        return ctx
    }

    // 배경을 제외한 화면을 로딩
    drawSprites = (time) => {
        const list = getSpriteList()
        
        this.ctx.clearRect(0,0, 1024, 800)
        for(let sprite of list){
            this.drawSprite.bind(this)(sprite, time)
            
            if(sprite.type.includes('Boss')){
                for(let enemy of sprite.enemyList){
                    this.drawSprite.bind(this)(enemy.sprite, time)
                }
            }
        }
    }

    // 스프라이트를 화면에 그려움
    drawSprite(sprite, time) {
        if(sprite.image){
            let image = sprite.image

            if(sprite.isHit){
                this.imageToHitImage.bind(this)(sprite.image)

                image = this.bufferCanvas
            }
            
            this.drawEffect.bind(this)(sprite, time)
            
            this.ctx.drawImage(image, sprite.x - sprite.size[0]/2, sprite.y - sprite.size[1], sprite.size[0], sprite.size[1])
        }
    }

    // 깜박이는 효과 등 여러가지 효과를 제어
    drawEffect(sprite, time) {
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
    }

    // 맵이 로딩될때 백그라운드를 그려줌
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