async function getImage(url){
    const img = document.createElement('img')
    img.src = url

    return new Promise((res, rej)=>{
        img.onload = ()=>{
            res(img)
        }
        img.onerror = ()=>{
            res(false)
        }
    })
}