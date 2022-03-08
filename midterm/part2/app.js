// eli brooks
// midterm part 2
// 3/1/22

// take div from html, convert to be usable in js
let yesnoDiv = document.getElementById("yesno");

// change function onclick
function change() {
    if (yesnoDiv.innerHTML == "yes") {
        yesnoDiv.innerHTML = "no";
    }
    else if (yesnoDiv.innerHTML == "no") {
        yesnoDiv.innerHTML = "yes";
    }
}