export default class GraphicControl {
    constructor() {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.ctx.imageSmoothingEnabled = false

        this.canvas.width = 1000
        this.canvas.height = 800
    
        this.graphTimer = setInterval(this.drawSprite.bind(this), 10)
    }

    drawSprite() {
        const list = getSpriteList()
        
        this.ctx.clearRect(0,0, 1000, 1000)
        for(let sprite of list){
            if(sprite.image){
                this.ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.size[0], sprite.size[1])
            }
        }
    }
}