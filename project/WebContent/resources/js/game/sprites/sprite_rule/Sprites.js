// x : x좌표
// y : y좌표



// 원래 sizeX,Y로 조절했는데 다각형
// hitBoxType : 히트박스 종류
// type : 자신의 종류 (플레이어라면 InteractionSprites->Unit->Friendly)

// animationImageList = {
//     'default' : [await getImage('url'), getImage('url')],
//     'move' : [await getImage('url'), getImage('url')],
// }
// animationspeed : 애니메이션 스피드 (ms)

import DefaultValue from '../../../constant/DefaultValue.js';

export default class Sprites {
    constructor(x,y, collisionList, hitBoxType, animationImageList, animationspeed){
        this.x = x
        this.y = y
        this.collisionList = collisionList
        this.hitBoxType = hitBoxType
        this.animationImageList = animationImageList
        this.animationspeed = animationspeed

        this.type = []

        this.image = DefaultValue.DEFAULT_IMAGE

        this.animationInit()
    }

    animationInit() {
        this.animationTypeChange('default')
    }

    imageChange() {
        this.animationIndex++

        if(this.animationIndex >= this.animationLength) {
            this.animationIndex = 0
        }
        this.image = this.animationImageList[this.animationType][this.animationIndex]
        console.log(this.image)
        // this.animationTimer = setTimeout(this.imageChange.bind(), this.animationspeed);
    }

    animationTypeChange = (type)=>{
        this.animationType = type
        this.animationIndex = 0
        this.animationLength = this.animationImageList[this.animationType].length

        this.animationTimer = this.imageChange.bind(this)();
    }
}