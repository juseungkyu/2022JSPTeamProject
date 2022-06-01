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
    
        this.graphTimer = setInterval(this.drawSprite.bind(this), 10)
    }

    drawSprite = () => {
        const list = getSpriteList()
        
        this.ctx.clearRect(0,0, 1024, 800)
        for(let sprite of list){
            if(sprite.image){
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