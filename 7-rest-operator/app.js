// Rest Operator...
// gathers/collects items and is always called at last
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke/call the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];

//first and second items are picked up and then rest of them
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, second, restOfTheFruits); //output: apple, orange, ['lemon','banana','pear']

//rest operator on array is array itself, so we can call any array functions on it, for e.g.
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit); //lemon

// similarly for objects
// rest operator on object is object itself
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
console.log(job, rest); //output: developer {name:'john',lastName: 'smith'}

// functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

// getAverage(person.name,67,78,89,78)

const testScores = [67, 78, 99, 100];

getAverage(person.name, ...testScores);
