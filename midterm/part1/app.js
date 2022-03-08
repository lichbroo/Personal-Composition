// eli brooks
// midterm part 1
// 3/1/22

// declaring div back from HTML
let arrayDiv = document.getElementById("array");

// array including all the elements
let cheatcode = ["up", "up", "down", "down", "left", "right", "left", "right", "a", "b", "start"];

// for loop to display the elements
for(let i = 0; i < 10; i++) {
    arrayDiv.innerHTML += cheatcode[i] + "-";
}