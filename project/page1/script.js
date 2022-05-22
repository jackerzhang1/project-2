const toggle =document.getElementById('toggle')
const nav= document.getElementById('nav')

toggle.addEventListener('click',()=>nav.classList.toggle ('active'))
const textEl =document.getElementById('text')
const speedEl =document.getElementById('speed')

const text='Welcome to teng oning restaurant'
let idx =1
let speed =300/speedEl.value

writeText()

function writeText(){
    textEl.innerText =text.slice(0, idx)
    idx++
    if(idx > text.length){
        idx =1
    }
    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) =>speed =300 /e.target.value)
