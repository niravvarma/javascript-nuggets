const person = ['hello', 'great'];

const testPerson = person.map(function (item) {
  console.log(item);
});

const newPerson = person.map(function (item) {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);

//dynamic object keys are always used using Square bracket notation
const key = 'loading';
const status = 'status';
const state = {
  [key]: true, //here key refers to loading
  status: 'pending', //her status refers to internal key
};
console.log(state);
state[key] = false; // same as state.loading
state.status = 'finished';
state[status] = 'working'; //key matches, thus, object is updated
console.log(state);

//furthermore a function can be written which can change the behavior of the objects
function changeState(key, val) {
  state[key] = val;
}
changeState('loading', true); //either directly by key name
changeState(key, false); //either by reference
changeState('new', true); // adding new property
console.log(state);
