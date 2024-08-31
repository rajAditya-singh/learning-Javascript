// generate Random colors

const randomcolor = function () {
    const hex ='0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]; 
    }
    return color;
}

let intervalId;
const startchanging = function () {
    if (!intervalId) {
        intervalId = setInterval(chnagebackgroundcolor, 1000)
    }
    function chnagebackgroundcolor(){
    document.body.style.backgroundColor = randomcolor();
}
} 
const stopchanging = function () {
     clearInterval(intervalId)
     intervalId = null;
} 

document.querySelector('#start').addEventListener('click', startchanging)
document.querySelector('#stop').addEventListener('click', stopchanging)



