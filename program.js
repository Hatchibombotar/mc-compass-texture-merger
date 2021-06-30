const fs = require('fs');
const { createCanvas, loadImage } = require('canvas')

const canvas = createCanvas(16, 16)
const ctx = canvas.getContext('2d')

loadImage(`./input/compass_base.png`).then((base_image) => {
    for (let textureNumber = 0; textureNumber < 32; textureNumber++) {
        const textureNumberText = (String()+textureNumber).padStart(2,"0")
        loadImage(`./input/compass_${textureNumberText}.png`).then((image) => {
            ctx.drawImage(base_image, 0, 0, 16, 16)
            ctx.drawImage(image, 0, 0, 16, 16)
            const buffer = canvas.toBuffer('image/png')
            fs.writeFileSync(`./output/compass_${textureNumberText}.png`, buffer)
        })
    }
})