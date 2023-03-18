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


