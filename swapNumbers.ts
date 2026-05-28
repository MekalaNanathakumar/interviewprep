

let a = 10;
let b = 20;

[a, b] = [b, a];//Array Destructuring Assignment 
console.log(a);
console.log(b);


function getUser() {
    return ["Mekala", 25];
}

let [username, age] = getUser();

console.log(username);
console.log(age);

let temp
let c=10
let d=20

temp=c
c=d
d=temp

console.log(c);
console.log(d)
