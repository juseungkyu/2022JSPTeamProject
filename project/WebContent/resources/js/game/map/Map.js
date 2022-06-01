// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

export default class Map {
    constructor() {
        this.background = []
        this.sprites = []
    }

    // 스프라이트
    init = (background, sprites)=>{
        this.background = background
        this.sprites = sprites
    }

    gridhelper = (x,y)=>{
        return [x*32+16, y*32 + 32]
    }
}