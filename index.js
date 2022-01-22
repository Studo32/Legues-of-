let mundoEl = document.getElementById("mundo")
let kyleEl = document.getElementById("kyle")
let pykeEl = document.getElementById("pyke")

let countMundo = 0, countKyle = 0, countPyke = 0;

function incrementmundo() {
    countMundo = countMundo + 1 
    mundoEl.innerText = countMundo
}

function incrementkyle() {
    countKyle = countKyle + 1 
    kyleEl.innerText = countKyle
}

function incrementpyke() {
    countPyke = countPyke + 1 
    pykeEl.innerText = countPyke
}