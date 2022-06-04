const INPUT_ABLE_KEY = [
    'ArrowUp',
    'ArrowDown',
    'ArrowRight',
    'ArrowLeft',
    'KeyA'
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
            delete this.inputKey[e.code]
            this.onInputChange.bind(this)()
        });
    }

    onInputChange() {
        const x = this.inputKey['ArrowRight'] ? 1 : (this.inputKey['ArrowLeft'] ? -1 : 0)
        const y = this.inputKey['ArrowUp'] ? -1 : (this.inputKey['ArrowDown'] ? 1 : 0)
        
        if(this.inputKey['KeyA']){
            this.sprite.attack()
        }

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