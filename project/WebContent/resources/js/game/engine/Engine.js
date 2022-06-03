import GraphicControl from './GraphicControl.js';
import Physics from './Physics.js';

export default class Enigne {
    constructor() {
        this.basicPhysics = new Physics()
        this.graph = new GraphicControl()
        this.before = 0
        this.currentWeapon

        this.ui = document.querySelector('#play-state')

        window.requestAnimationFrame(this.frame.bind(this));
        
        this.uiSet()

        window.uiSettingFunc = this.uiSet
    }
    
    uiSet = () => {
    	this.ui.querySelector('.weapon').innerHTML = `
            <img src="./resources/image/ui/miku/${this.currentWeapon}.png" alt="${this.currentWeapon}" title="${this.currentWeapon}">
        `

        if(window.playerSprite.hp <= 0){
            
        }

        let hp = ''

        for(let i = 0; i < window.playerSprite.hp; i++){
            hp += '<div></div>'
        }

    	this.ui.querySelector('.hp').innerHTML = `
            ${hp}
        `

    	this.ui.querySelector('.count').innerHTML = `
            <span>${window.playerSprite.weaponCount} 발</span>
        `
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


        