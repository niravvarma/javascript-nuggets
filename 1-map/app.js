// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];
// Quokka.js - Extension
// map
// - returns a new array
// - does not change the size of original array (unlike filter)
// - uses values from original array when making new one

const getAllAges = people.map((person) => person.age);
console.log(getAllAges);

const newPeopleArray = people.map((person) => {
  return {
    firstName: person.name,
    age: person.age,
  };
});
console.log(newPeopleArray);

// map each person's first name and set in html tag
const names = newPeopleArray.map((person) => `<h2>${person.firstName}</h2>`);
const result = document.querySelector('#result');

// join removes comma that was generated using map function
result.innerHTML = names.join('');
