// vertexList = [
//    {x:10, y:10},
//    {x:10, y:-10}
//    {x:-10, y:-10}
//    {x:-10, y:10}
//] : 기준 x,y 좌표와 비교하여 꼭짓점을 표현 무조건 시계방향으로 해야함
// 타원의 방정식 보다가 머리 터질 것 같아서 분리 초평면 써서 
// 볼록한 도형만 됨 ㅈㅅ 봐주셈 (별 같은 거 안 됨)

export default class Collision {
    constructor(name, vertexList, sprite){
        this.name = name
        this.vertexList = vertexList
        this.sprite = sprite
    }

    getSprite = this.sprite

    getName = this.name

    getVertexList = this.vertexList
}