function getLocal(key, defaultValue=null){
    const value = window.localStorage.getItem(key)

    if(value === null){
        return defaultValue
    }

    return JSON.parse(value)
}

function setLocal(key, value){
    let jsonValue = null
    try {
        jsonValue = JSON.parse(value)
    } catch (error) {
        alert(key + ' 저장 실패')
        return false;
    }

    window.localStorage.setItem(key, jsonValue)

    return true;
}