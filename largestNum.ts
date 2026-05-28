
const numbers=[1,2,3,8,9,3,7]
const largest = Math.max(...numbers);

console.log(largest);
//=========================================================

const number=[1,2,3,8,9,3,7]
let largest1: number = number[0]
for (let i = 1; i < number.length; i++) {
    if (number[i] > largest1) {
        largest1 = number[i];
    }
}

console.log(largest1);

//=========================================================
const numbers1: number[] = [1, 2, 3, 8, 9, 3, 7];

let largest2: number = numbers[0];

for (const num of numbers1) {
    if (num > largest) {
        largest2 = num;
    }
}

console.log(largest);