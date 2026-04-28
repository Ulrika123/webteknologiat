// Satunnaisluvut sivun latauksessa
window.onload = function () {
    document.getElementById("numA").value = getRandom();
    document.getElementById("numB").value = getRandom();
};

function getRandom() {
    return Math.floor(Math.random() * 10) + 1;
}

function increase(id) {
    let field = document.getElementById(id);
    let value = parseInt(field.value);
    if (value < 10) field.value = value + 1;
}

function decrease(id) {
    let field = document.getElementById(id);
    let value = parseInt(field.value);
    if (value > 1) field.value = value - 1;
}

let count = 0;

function calculate() {
    let a = parseInt(document.getElementById("numA").value);
    let b = parseInt(document.getElementById("numB").value);
    let op = document.getElementById("operation").value;

    if (isNaN(a) || isNaN(b)) {
        alert("Syötä kelvolliset numerot.");
        return;
    }

    let result;

    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b !== 0 ? a / b : "Nollalla ei voi jakaa"; break;
    }

    document.getElementById("result").textContent = result;

    // Päivitä laskumäärä
    count++;
    document.getElementById("count").textContent = count + " kpl";

    // Ei lisätä numeroita historiaan → jätetään tyhjäksi
    document.getElementById("history").innerHTML = "";
}