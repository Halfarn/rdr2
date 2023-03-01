let price = 0
const inflation = 36.04

function returnText(){
    let input = document.getElementById("userInput").value;
    price = input
}


let saveInf = document.getElementById('save-inf')
function calculate() {
    saveInf.innerHTML = ""
    saveStr = price
    newPrice = price * inflation
    priceRound = Math.round((newPrice + Number.EPSILON) * 100) / 100
    saveInf.innerText +="$" + priceRound
}