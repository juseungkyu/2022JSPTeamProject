// 세부 엔진 임포트
import GraphicControl from './GraphicControl.js';
import Physics from './Physics.js';

// 맵 임포트
import DefaultMap from '../map/state1/DefaultMap.js';
// 맵 임포트
import Map1 from '../map/state1/Map1.js';
import BubbleMap from '../map/state1/BubbleMap.js';

export default class Engine {
    constructor() {
        this.basicPhysics = new Physics()
        this.graph = new GraphicControl()
        this.before = 0
        this.currentWeapon

        this.ui = document.querySelector('#play-state')

        window.requestAnimationFrame(this.frame.bind(this));

        this.hitEffect = document.querySelector('.front-ground')
        this.beforeHp = window.playerSprite.hp

        window.uiSettingFunc = this.uiSet
        window.uiSettingFunc()

        window.nextStage = this.nextStage

        this.gameSelect()
    }

    gameSelect(){
        const basicMode = document.querySelector('.basic-mode')
        const bossMode = document.querySelector('.boss-mode')
        const gameEx = document.querySelector('.game-ex')

        this.isStart = false

        basicMode.addEventListener('click', this.setBasicMode.bind(this))
        bossMode.addEventListener('click', ()=>{
            if(this.isStart){
                return
            }

            this.isStart = true
        })
        gameEx.addEventListener('click', ()=>{
            if(isStart){
                return
            }

            this.isStart = true
        })
    }

    setBasicMode(){
        if(this.isStart){
            return
        }

        this.isStart = true
        this.gameStart = ()=>{
            this.nextStage()
        }
        this.nextStage = () => {
            clearUnitList()
            clearSpriteList()
    
            // 똑같은 맵 많이 나올까봐 무작위 대신 시간으로
            const r = new Date().getTime() % 5
            let map = null
            switch (r) {
                case 0:
                    map = new DefaultMap()
                    break;
                case 1:
                    map = new DefaultMap()
                    break;
                case 2:
                    map = new DefaultMap()
                    break;
                case 3:
                    map = new Map1()
                    break;
                case 4:
                    map = new Map1()
                    break;
                default:
                    map = new Map1()
                    break;
            }
            
            setClearState(false)
            this.setMap(map)
        }
        this.gameStart()

        document.querySelector('.select-game').style.display = 'none'
    }

    nextStage = () => {
        clearUnitList()
        clearSpriteList()

        // 똑같은 맵 많이 나올까봐 무작위 대신 시간으로
        const r = new Date().getTime() % 5
        let map = null
        switch (r) {
            case 0:
                map = new DefaultMap()
                break;
            case 1:
                map = new DefaultMap()
                break;
            case 2:
                map = new DefaultMap()
                break;
            case 3:
                map = new Map1()
                break;
            case 4:
                map = new Map1()
                break;
            default:
                map = new Map1()
                break;
        }
        setClearState(false)
        this.setMap(map)
    }

    uiSet = () => {
        this.ui.querySelector('.weapon').innerHTML = `
            <img src="./resources/image/ui/miku/${this.currentWeapon}.png" alt="${this.currentWeapon}" title="${this.currentWeapon}">
        `
        
        
            

        if (this.beforeHp !== window.playerSprite.hp && !window.playerSprite.isDie) {
            this.hitEffect.classList.add('active')
            
            setTimeout(() => {
                this.hitEffect.style.transition = '0.8s'
                this.hitEffect.classList.remove('active')
            }, 0);
            setTimeout(() => {
                this.hitEffect.style.transition = '0s'
            }, 800);

            
                //미쿠 쳐맞는 모션
                document.querySelector('#miku').innerHTML = `
            <img src="./resources/image/player/4.png" alt="alt" title="image">
            `
            //1안


            // document.querySelector('#miku').innerHTML = `
            // <img src="./resources/image/player/4-2.png" alt="alt" title="image">
            // `
            // 2안 맞을 때 클로즈업
                
                if(window.playerSprite.hp==3){
                setTimeout(() => {
                    console.log("hp3 img print")
                    document.querySelector('#miku').innerHTML = `
                    <img src="./resources/image/player/1.png" alt="alt" title="image">
                    `
                
                }, 1000);
                } else if(window.playerSprite.hp==2){
                    setTimeout(() => {
                        console.log("hp2 img print")
                        document.querySelector('#miku').innerHTML = `
                        <img src="./resources/image/player/2.png" alt="alt" title="image">
                        `
                    
                    }, 1000);
                } else if(window.playerSprite.hp==1){
                    setTimeout(() => {
                        console.log("hp1 img print")
                        document.querySelector('#miku').innerHTML = `
                        <img src="./resources/image/player/3.png" alt="alt" title="image">
                        `
                    
                    }, 1000);
                }
            
        }

        this.beforeHp = window.playerSprite.hp
        
        let hp = ''

        for (let i = 0; i < window.playerSprite.hp; i++) {
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
        this.graph.drawSprites(time)
    
        this.before = timeStamp
        window.requestAnimationFrame(this.frame.bind(this));
    }
    
    setMap = (map) => {
        for (let sprite of map.sprites) {
            pushSpriteList(sprite, sprite.y)
        }
    
        for (let unit of map.units) {
            pushUnitList(unit, unit.y)
        }
        
        this.graph.drawMap(map)
    
        window.playerSprite.x = 80
        window.playerSprite.y = 420
        
        pushUnitList(window.playerSprite, window.playerSprite.y)
    }
}   
    

