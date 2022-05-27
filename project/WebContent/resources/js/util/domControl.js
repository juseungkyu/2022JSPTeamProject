async function getImage(url){
    const img = document.createElement('img')
    img.src = url

    return Promise((res, rej)=>{
        img.onload = ()=>{
            res(img)
        }
    })
}