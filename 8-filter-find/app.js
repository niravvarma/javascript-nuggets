// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance, returns first match, if no match - undefined

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];
// 1. filter
const youngPeople = people.filter((person) => {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age <= 25;
});
console.log(youngPeople);

//can be written in 1 line without return statement
const developers = people.filter((person) => person.position === 'developer');
console.log(developers); //array is returned

// 2. filter - no match
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs); //empty array is returned

// 3. find
const peter = people.find((person) => person.name === 'peter');
console.log(peter); // single instance is returned, in this case object

// 4. find - no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson); //undefined

// 5. find - multiple matches
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson); //first item is returned

const anna = people.filter((person) => person.name === 'anna');
console.log(anna); //array

console.log(peter.position); //as object is returned, can call directly by key
console.log(anna[0].position); //as array is returned, have to fix call the item by index and then by key
