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

async function getDotImage(url, scale = 3) {
	const img = await getImage(url)
	
	if(!img){
		return false
	}
	const srcCanvas = document.createElement('canvas')
	const srcCtx = srcCanvas.getContext('2d')
	srcCanvas.width = img.width
	srcCanvas.height = img.height
	srcCtx.drawImage(img, 0, 0)
	
	const resultCanvas = document.createElement('canvas')
	const resultCtx = resultCanvas.getContext('2d')
	resultCanvas.width = img.width * scale
	resultCanvas.height = img.height * scale	
	
	const dotData = srcCtx.getImageData(0, 0, img.width, img.height).data;
	
    let offset = 0;
    for (let y = 0; y < srcCanvas.height; ++y) {
        for (let x = 0; x < srcCanvas.width; ++x) {
        	let r = dotData[offset++]
        	let g = dotData[offset++]
        	let b = dotData[offset++]
        	let a = dotData[offset++] / 100.0
        	resultCtx.fillStyle = 'rgba(' + [r, g, b, a].join(',') + ')'
        	resultCtx.fillRect(x * scale, y * scale, scale, scale)
        }
    } 
    
    return resultCanvas
}

const imageUrls = ['/resources/image/test.png']
const imageObject = {}

async function imageSetting(){
	for(let url of imageUrls){
		const urls = url.split('/')
		const name = urls[urls.length-1].split('.')[0]
		
		imageObject[name] = await getDotImage(url)
	}
}