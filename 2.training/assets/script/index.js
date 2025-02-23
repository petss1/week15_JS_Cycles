const numbers=[];

for(let i = -10; i < 11; i+=1) {
    numbers.push(i);
}

console.log("Первоначальный массив", numbers.join(", "))

for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
        i--;
    }
}

console.log("Положительный массив", numbers.join(", "));

for (let i = 0; i < numbers.length; i+=1) {
    numbers[i] = numbers[i] ** 2;
}

console.log("Массив в квадрате:", numbers.join(", "));

numbers.sort((a, b) => b - a);

console.log("Массив в порядке убывания:", numbers.join(", "));