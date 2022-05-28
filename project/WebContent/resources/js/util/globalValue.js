window.unitList = {}
window.spriteList = {}

// 유닛 리스트
function pushUnitList (sprite){
    const id = new Date().getTime()
    window.unitList[id] = sprite
    window.spriteList[id] = sprite

    return id 
}

function deleteUnitList (id){
    delete window.unitList[id]
}

function getUnitList(){
    return window.unitList
}

function getUnit(id){
    return window.unitList[id]
}

// 스프라이트 리스트
function pushSpriteList (sprite){
    const id = new Date().getTime() * 0.000000000001
    window.spriteList[id] = sprite

    return id 
}

function deleteSpriteList (id){
    delete window.spriteList[id]
}

function getSpriteList(){
    return window.spriteList
}

function getSprite(id){
    return window.spriteList[id]
}

