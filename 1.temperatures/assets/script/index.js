const cities = ["Moscow", "Washington", "Beijing", "Ottawa", "Paris"];
let temperatures = [];

for (let i=0; i < cities.length; i+=1){
    let userTemperature = prompt(`Введите температуру для города ${cities[i]}`);

    if (userTemperature !== null) {
        temperatures.push(Number(userTemperature));
    } else {
        alert("Вы отменили ввод температуры.");
        temperatures.push("0");
    }
}

const cityMoscow=document.getElementById("moscow");
cityMoscow.textContent += `${temperatures[0]}°C`;
const cityWashington=document.getElementById("washington");
cityWashington.textContent += `${temperatures[1]}°C`;
const cityBeijing=document.getElementById("beijing");
cityBeijing.textContent += `${temperatures[2]}°C`;
const cityOttawa=document.getElementById("ottawa");
cityOttawa.textContent += `${temperatures[3]}°C`;
const cityParis=document.getElementById("paris");
cityParis.textContent += `${temperatures[4]}°C`;

let maxTemperature = 0;
let minTemperature = 0;  

for (let i = 0; i < temperatures.length; i+=1) {
    if (temperatures[i] > maxTemperature) {
        maxTemperature = temperatures[i];
    }
    if (temperatures[i] < minTemperature) {
        minTemperature = temperatures[i];
    }
}

const max=document.getElementById("max-temperature");
max.textContent += `${maxTemperature}°C`;
const min=document.getElementById("min-temperature");
min.textContent += `${minTemperature}°C`;




