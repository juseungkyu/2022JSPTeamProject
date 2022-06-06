const INPUT_ABLE_KEY = [
    'ArrowUp',
    'ArrowDown',
    'ArrowRight',
    'ArrowLeft',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
    'Space',
] 

export default class UserControlHelper {
    constructor(playerSprite){
        this.sprite = playerSprite

        window.playerSprite = playerSprite

        this.init()
    }

    init() {
        this.inputKey = {}
        this.readKeyInput.bind(this)()

        this.pressingKeyEvent = setInterval(this.onInput.bind(this), 50);
    }

    readKeyInput() {
        window.addEventListener('keydown', (e)=>{
            if(!INPUT_ABLE_KEY.includes(e.code)){
                return
            }

            e.preventDefault()

            this.inputKey[e.code] = true
            this.onInputChange.bind(this)()
        })

        window.addEventListener("keyup", (e) => {
            if(e.code == 'Space' && isClear()
               && this.sprite.x > 900
               && this.sprite.y > 370
               && this.sprite.y < 470){
                window.nextStage()
            }

            delete this.inputKey[e.code]
            this.onInputChange.bind(this)()
        });
    }

    onInput() {
        const x = this.inputKey['KeyD'] ? 1 : (this.inputKey['KeyA'] ? -1 : 0)
        const y = this.inputKey['KeyW'] ? -1 : (this.inputKey['KeyS'] ? 1 : 0)
        
        if(x != 0 || y != 0){
            this.sprite.attack(x, y)
        }
        
    }

    onInputChange() {
        const x = this.inputKey['ArrowRight'] ? 1 : (this.inputKey['ArrowLeft'] ? -1 : 0)
        const y = this.inputKey['ArrowUp'] ? -1 : (this.inputKey['ArrowDown'] ? 1 : 0)

        if(x === 0 && y === 0){
        	this.sprite.setAnimationSpeed(300)
        	this.sprite.animationTypeChange('default')
            this.sprite.stopMoving()
        } else {
        	 this.setAnimationDirection.bind(this)(x, y)
        	
            this.sprite.changeDirection(x, y)
        }
    }   
    
    setAnimationDirection(x,y){
    	 if(this.sprite.animationType !== 'moveRight' && x > 0 && y === 0){
		 	this.sprite.setAnimationSpeed(100)
         	this.sprite.animationTypeChange('moveRight')
		 }

    }
}