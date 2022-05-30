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

async function getDotImage(url, scale = 2) {
	const img = await getImage(url);
	
	if(!img){
		return false
	}
	
	const canvas = document.createElement('canvas')
	canvas.width = img.width
	canvas.height = img.height
	
	const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    
    let offset = 0;
    for (var y = 0; y < this.height; ++y) {
        for (var x = 0; x < this.width; ++x) {
            var r = src_data[offset++];
            var g = src_data[offset++];
            var b = src_data[offset++];
            var a = src_data[offset++] / 100.0;
            ctx.fillStyle = 'rgba(' + [r, g, b, a].join(',') + ')';
            ctx.fillRect(x * scale, y * scale, scale, scale);
        }
    }
    
    return canvas
}