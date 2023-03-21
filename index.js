let saveEl = document.getElementById("saved")
let countEl = document.getElementById("counter")
let sumEl = document.getElementById("sum")
let count = 0
let totalCount = 0

function increment() {
    count += 1
    countEl.textContent = count
    totalCount += 1
    sumEl.textContent = totalCount

}

function decrement() {
    count -= 1
    countEl.textContent = count
    totalCount -= 1
    sumEl.textContent = totalCount

}

function save() {
    let countStr = count + " , "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset(){
    count = 0
    totalCount = 0
    countEl.textContent = 0
    saveEl.textContent = ""
    sumEl.textContent = ""

}


function lightMod() {
var backGroundColor = document.body;
backGroundColor.classList.toggle("light-mode");

var countNumber = document.getElementById("counter")
countNumber.classList.toggle("h2-light")

var navIcons = document.getElementById("navbar");
navIcons.classList.toggle("navbar-light");

var btnHolderInc = document.getElementById("inc-btn");
btnHolderInc.classList.toggle("btn-light")

var btnHolderDec = document.getElementById("dec-btn");
btnHolderDec.classList.toggle("btn-light")

var textBox = document.getElementById("text-box1")
textBox.classList.toggle("text-section-light")

var textBox2 = document.getElementById("text-box2")
textBox2.classList.toggle("text-section-light")

var saveBtn = document.getElementById("save-btn")
saveBtn.classList.toggle("save-round-btn-light")
}



