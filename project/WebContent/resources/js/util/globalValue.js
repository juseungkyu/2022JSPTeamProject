window.unitList = new SpriteList(800)
window.spriteList = new SpriteList(800)

// 유닛 리스트
function pushUnitList (sprite, y){
    window.unitList.push(sprite, y)
    pushSpriteList(sprite, y)
}

function swapUnitPoint (sprite, beforeY, newY){
    window.unitList.swap(sprite, beforeY, newY)
    swapSpritePoint(sprite, beforeY, newY)
}

function deleteUnitList (y){
    window.unitList.delete(y)
}

function getUnitList(){
    return window.unitList.getList()
}

function getUnit(id){
    return window.unitList[id]
}

// 스프라이트 리스트
function pushSpriteList (sprite, y){
    window.spriteList.push(sprite, y)
}

function deleteSpriteList (y){
    window.spriteList.delete(y)
}

function swapSpritePoint (sprite, beforeY, newY){
    window.spriteList.swap(sprite, beforeY, newY)
}

function getSpriteList(){
    return window.spriteList.getList()
}

