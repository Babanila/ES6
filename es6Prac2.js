var Readable = require ('stream').Readable;

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let array3 = [9, 10];

array1.push(...array2);
console.log(array1);

array2.push(...array3);
console.log(array2);

array3.pop();
console.log(array3);

let array4 = array1.slice(1, -1);
console.log(array4);

let newArr = new Readable;
newArr.push('cars \n');
newArr.push('2');
newArr.push(null);
newArr.pipe(process.stdout);