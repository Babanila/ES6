import { pipe } from 'lodash/fp';

const array = [1, 2, 3, 4, 5];

const array1 = array.map(num => num * 2);

const array2 = array.filter(num => num % 2 === 0);

const array3 = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0 );

console.log(array1);    // -> [2, 4, 6, 8, 10]
console.log(array2);     // [2, 4]
console.log(array3);    // 15




const toSlug = pipe(split(' '), map(toLowerCase), join('-'), encodeURIComponent
);

console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'