// Spread Operator...
// Official definition: Allows and iterable to spread/expand individually inside reciever
// Simplified: Split into single items and COPY them

//1. array spread operator
//syntax: const/let variableName = [...arrayName]
const udemy = 'udemy';
const letters = [...udemy];
console.log(letters); //prints all the characters in the string

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

//creates a new array combining 2 array and a string
const friends = [...boys, ...girls, bestFriend];
console.log(friends);

//note: however if this was used --> friends = [boys, girls, bestFriend]
//we would get nested arrays + string

// following will create reference to the array
// const newFriends = friends; -- this is wrong as any change in newFriends will cause change in friends array

// so use spread operator which actually makes a copy of the original object
newFriends = [...friends];
newFriends[0] = 'nancy'; //this change affects only newFriends object
console.log(newFriends);
console.log(friends);

// ES2018 - ES8
//2. Object spread operator
//syntax: const/let variableName = {...objectName}
const person = { name: 'john', job: 'developer' };

//the newPerson object simply copies the person object
// then it add a new property i.e. city and overrides the name property
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(newPerson);
