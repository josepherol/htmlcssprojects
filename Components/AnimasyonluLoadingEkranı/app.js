const loadText = document.querySelector('.loading-text')
const image = document.querySelector('.image')

let load = 0
let int = setInterval(bluring, 50)

function scale (number, inMin, inMax, outMin, outMax){
    return (number - inMin) * (outMax -outMin) / (inMax - inMin) + outMin;
}

function bluring() {
    load++

    if (load > 99){
        clearInterval(int)
    }

    loadText.innerHTML = `${load}%`

    loadText.style.opacity = scale(load, 0, 100, 2, 0)
    image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` 
}
