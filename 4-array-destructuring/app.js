// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);
/**
 * Syntax of object destructuring
 *
 * start with const, let, var
 * then [] = arrayName
 *
 * within [], you can name the variables as you want
 * like [a1] where a1 refers to arrayName[0] value
 * [a1, a2] where a2 refers to arrayName[1] value and so on..
 * thus, here order is very important.
 */
// following returns 1st, 2nd, 3rd, ...
const [john, peter, bob, anna, kelly, susan] = friends;

console.log(john, peter, bob);
console.log(john, peter, bob, anna, kelly);
console.log(john, peter, bob, anna, kelly, susan);
console.log(john, peter, bob, anna, kelly, susan);

//note, now john, peter, bob, anna, kelly are variables and are defined as constants
// so this --> const [john, peter, bob, anna, kelly] = friends
// will end up with error.

// can also skip some values but order has to maintained in order to fetch the values
const [a1, , a2, , a3] = friends;
console.log(a1, a2, a3);

// Excercise - Swap Variables

let first = 'bob';
let second = 'john';

// METHOD 1: normally, you would have to do like following
// let temp = second;
// second = first;
// first = temp;

// METHOD 2: but by array destructuring, you can simply re-assign the values as following
[second, first] = [first, second];

console.log(first, second);
