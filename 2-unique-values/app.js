// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
// map - get all instances
const allMenuCategories = menu.map((item) => item.category);

// new Set - get only unique values
var allUniqueCategoriesSet = new Set(allMenuCategories);

// set to array
const allUniqueCategories = [...allUniqueCategoriesSet];

//adding another item to array
const menuCategories = ['brunch', ...allUniqueCategories];

// one line statement of all above steps
// const categories = ['all', ...new Set(menu.map((item) => item.category))];

// finally display result
const result = document.querySelector('.result');
result.innerHTML = menuCategories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');
