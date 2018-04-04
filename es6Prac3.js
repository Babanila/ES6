// Arrow function

let numMultiply = (a, b) => a * b;
console.log(numMultiply(2, 3));


let array1 = [1, 2, 3, 4,5];
let array2 = array1.map(x => x * 2);
    console.log(array2);


let array3 = array2.map(x => x + 1 );
console.log(array3);


let average = numbers => {
    let sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};
console.log(average(array3));


