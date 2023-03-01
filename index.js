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
    if (isNaN(newPrice) === true) {
        saveInf.innerHTML = "Please enter a valid number"
    } else {priceRound = Math.round((newPrice + Number.EPSILON) * 100) / 100
    saveInf.innerText +="$" + priceRound}
}

window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}