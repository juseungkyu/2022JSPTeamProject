// Map의 구조
// background : 세로 25, 가로 32 그리드 (1칸당 32픽셀)
// sprites : 스프라이트들

export default class Map {
    constructor() {
        this.background = []
        this.sprites = []
        this.units = []
    }

    // 스프라이트
    init = (background, sprites, units)=>{
        this.background = background
        this.sprites = sprites
        this.units = units
    }

    gridhelper = (x,y, size=32)=>{
        return [x*size+size/2, y*size + size]
    }
}