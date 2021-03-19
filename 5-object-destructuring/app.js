// faster/easier way to access/unpack values from arrays

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// usually objects key, values are accessed as following
// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName,lastName,sister);

//but with object destructuring, we can directly access via keys
// syntax starts with either const or let
// for object use {} brackets
// within brackets, directly access the keyName
// if you want to access via alias then keyName:aliasName and aliasName will be available for use
// and then finally assign the value of the object
// like following
const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(firstName, last, city, zip, favoriteSibling);

//Gerenal function which uses the whole object
function printPerson(person) {
  console.log(person.first);
}
printPerson(bob);

//but object destructuring can be done at the parameters as well
function printPersonObj({ first }) {
  console.log(first);
}
printPersonObj(bob);

//furthermore, the whole object can be destructured in the parameter itself
function printPersonObj2({
  first,
  last: lastName,
  city,
  siblings: { sister: favSibling },
}) {
  console.log(first, lastName, city, favSibling);
}
printPersonObj2(bob);
