let FILL_MODE = 1
// тема: 1 - дота 2- к-поп 3- фигупы  
let IS_CLICKED = false
document.addEventListener('mousedown', function(){
   IS_CLICKED = true 
})
document.addEventListener('mouseup', function(){
   IS_CLICKED = false 
})

let CURRENT_COLOR = 'rgb(54, 54, 54)'

let DEFAULT_COLOR = 'rgb(54, 54, 54)'


let field = document.querySelector('.field')
for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `${i}`)
    field.appendChild(cell)

}
let cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover',function(){
        if (IS_CLICKED) 
        cell.style.backgroundColor = CURRENT_COLOR
    })


    cell.addEventListener('click',function(){
    if (FILL_MODE) {
    cells.forEach(cell => {
        cell.style.backgroundColor = CURRENT_COLOR
    })

    } else {

        cell.style.backgroundColor = CURRENT_COLOR
    }

    })

})

let color_blue = document.querySelector('.blue')
color_blue.addEventListener('click', function(){
    CURRENT_COLOR = '#3216B0'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_blue.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
    })

let color_red = document.querySelector('.red')
color_red.addEventListener('click', function(){
    CURRENT_COLOR = '#BF3030'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_red.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
})

let color_black = document.querySelector('.black')
color_black.addEventListener('click', function(){
    CURRENT_COLOR = 'black'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_black.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
    })

let color_green = document.querySelector('.green')
color_green.addEventListener('click', function(){
    CURRENT_COLOR = '#00BB3F'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_green.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
    })

let color_yellow = document.querySelector('.yellow')
color_yellow.addEventListener('click', function(){
    CURRENT_COLOR = '#FFEE40'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_yellow.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
    })



document.querySelector('.eraser').addEventListener('click', function(){
    CURRENT_COLOR = DEFAULT_COLOR
    FILL_MODE = false
        document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.eraser').classList.add('selected')
})

document.querySelector('.fill').addEventListener('click', function(){
FILL_MODE = !FILL_MODE
if (FILL_MODE) {
    document.querySelector('.fill').style.border = "2px solid black"
} else {
    document.querySelector('.fill').style.border = "none"
}
})

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });

}

let header = document.querySelector('header')
let main = document.querySelector('main')

let start_btn = document.querySelector('.knop')
start_btn.addEventListener('click', function(e){
    e.preventDefault()
    main.style.display = 'flex'
    scrollDown()
    setTimeout(function(){header.style.display = 'none'}, 500)

})

let save_btn = document.querySelector('.conservation')
save_btn.addEventListener('click', function(){
field.style.gap = '0'
domtoimage.toJpeg(field)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
    setTimeout(function(){ field.style.gap = '.5px'}, 500)

})







