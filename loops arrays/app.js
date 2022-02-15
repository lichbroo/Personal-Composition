let alienDiv = document.getElementById("alien");

let parks = ["Holiday ", "Marott ", "Central ", "Cool Creek "];
console.log(parks.length);

for(let i = 0; i < 4; i++) {
    alienDiv.innerHTML += parks[i];
}