// x : x좌표
// y : y좌표

// vertexList = [
//    {x:10, y:10},
//    {x:10, y:-10}
//    {x:-10, y:-10}
//    {x:-10, y:10}
//] : 기준 x,y 좌표와 비교하여 꼭짓점을 표현 무조건 시계방향으로 해야함
// 타원의 방정식 보다가 머리 터질 것 같아서 분리 초평면 써서 
// 볼록한 도형(별 같은 거 안 됨)만 됨 ㅈㅅ 봐주셈

// 원래 sizeX,Y로 조절했는데 다각형
// hitBoxType : 히트박스 종류
// type : 자신의 종류 (플레이어라면 InteractionSprites->Unit->Friendly)

// animationImageList = {
//     'default' : [await getImage('url'), getImage('url')],
//     'move' : [await getImage('url'), getImage('url')],
// }
// animationspeed : 애니메이션 스피드 (ms)

import {DefaultValue} from '../../../constant/DefaultValue.js';

export default class Sprites {
    constructor(x,y,vertexList, hitBoxType, animationImageList, animationspeed){
        this.x = x
        this.y = y
        this.vertexList = vertexList
        this.hitBoxType = hitBoxType
        this.animationImageList = animationImageList
        this.animationspeed = animationspeed

        this.type = []

        this.image = DefaultValue.defualtImage

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

        this.animationImageList[this.animationType][this.animationIndex]

        this.animationTimer = setTimeout(this.imageChange.bind(), this.animationspeed);
    }

    animationTypeChange = (type)=>{
        this.animationType = type
        this.animationIndex = 0
        this.animationLength = this.animationImageList[this.animationType].length

        this.animationTimer = setTimeout(this.imageChange());
    }
}