// 최소힙써도 시간 복잡도 n log n 나오니까
// y좌표가 해쉬인 해쉬맵을 만듦

class SpriteList {
    // y축 값 만큼 배열을 만들어서 저장
    constructor(maxY) {
        this.list = new Map()
        this.maxY = maxY
        for(let i = 0; i <= maxY; i++){
            this.list.set(i, [])
        }
    }

    // 새로운 값 삽입
    push = (sprite, y) => {
        try {
            this.list.get(parseInt(y)).push(sprite)
        } catch{}
    }

    // y값과 스프라이트 주소로 위치 찾고 삭제
    delete = (sprite, beforeY)=>{
        try {
            const list = this.list.get(parseInt(beforeY))
            list.splice(list.indexOf(sprite))
        } catch{}
    }

    // push와 delete 실행으로 위치 바꾸기
    swap = (sprite, beforeY, newY) => {
        if(newY < 0 || newY > this.maxY){
            return
        }

        this.push(sprite, newY)
        this.delete(sprite, beforeY)
    }

    // 배열로 바꿔줌
    getList = ()=>{
        let output = []
        for(let i = 0; i <= this.maxY; i++){
            output = output.concat(this.list.get(i))
        }

        return output
    }
}