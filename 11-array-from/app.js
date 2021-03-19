// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy));

const text = document.querySelectorAll('.text');
console.log(text);

const newText = Array.from(text).find((item) => item.textContent === 'person');
console.log(newText);

//if any object contains length property then that can be converted into as shown below
const someObj = { length: 120 };
const items = Array.from(someObj, (_, index) => {
  return index;
});
console.log(items); // output: 120 arrays with value having index

/**
 * PAGINATION EXAMPLE
 */
const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage); //Math.ceil used for rounding up
const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});
console.log(newItems); //returns Arrays of arrays
