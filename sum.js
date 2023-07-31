function sumArrayIntegers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const myArray = [1, 2, 3, 4, 5];
const result = sumArrayIntegers(myArray);
console.log(result);