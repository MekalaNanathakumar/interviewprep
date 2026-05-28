const arr1 = [1, 2, 2, 3, 4, 4];

const arr2=[...arr1]
const unique = [...new Set(arr1)];

console.log(unique);      
console.log(arr2);
console.log(...arr1)


const user = {
    name: "Mekala",
    age: 25
};

const updatedUser = {
    ...user,
    city: "Chennai"
};

console.log(updatedUser);


const arr = [1,2,2,3,4,4,5];

let unique1: number[] = [];

for(let i = 0; i < arr.length; i++) {
    if(!unique1.includes(arr[i])) {
        unique1.push(arr[i]);
    }
}

console.log(unique1);