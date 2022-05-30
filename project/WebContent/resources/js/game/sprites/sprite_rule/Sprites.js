// x : x좌표
// y : y좌표

// hitBoxType : 히트박스 종류
// type : 자신의 종류 (플레이어라면 InteractionSprites->Unit->Friendly)

// animationImageList = {
//     'default' : [await getImage('url'), getImage('url')],
//     'move' : [await getImage('url'), getImage('url')],
// }
// animationspeed : 애니메이션 스피드 (ms)

import DefaultValue from '../../../constant/DefaultValue.js';

export default class Sprites {
    constructor(x,y, collisionList, hitBoxType, animationImageList, size){
        this.x = x
        this.y = y
        this.size = size
        this.collisionList = collisionList
        
        for(let x of this.collisionList) {
            x.setSprite(this)
        }

        this.hitBoxType = hitBoxType
        this.animationImageList = animationImageList
        this.animationspeed = 500

        this.type = []

        this.image = DefaultValue.DEFAULT_IMAGE

        this.animationInit()
    }

    setAnimationSpeed = (animationspeed)=>{
        this.animationspeed = animationspeed
    }

    animationInit() {
        this.animationTypeChange('default')
    }

    imageChange() {
        this.animationIndex++

        if(this.animationIndex >= this.animationLength) {
            this.animationIndex = 0
        }
        
        this.image = this.currentAnimation[this.animationIndex]
        
        if(this.animationLength <= 1) {
        	return
        }
        this.animationTimer = setTimeout(this.imageChange.bind(this), this.animationspeed);
    }

    animationTypeChange = (type)=>{
        clearTimeout(this.animationTimer)
        
        this.animationIndex = 0
    	this.currentAnimation = this.animationImageList[type]
        this.animationLength = this.currentAnimation.length

        
        this.imageChange.bind(this)();
    }
}