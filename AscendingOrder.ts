const arr = [40, 10, 100, 25];
arr.sort((a, b) => a - b);

console.log(arr);

const arr2:number[]= [40, 10, 100, 25];

for (let i = 0; i < arr2.length; i++) {

    for (let j = 0; j < arr2.length - 1; j++) {

        if (arr2[j] > arr2[j + 1]) {

            let temp = arr2[j];
            arr2[j] = arr2[j + 1];
            arr2[j + 1] = temp;
        }
    }
}

console.log(arr);