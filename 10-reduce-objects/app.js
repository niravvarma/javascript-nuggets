// Reduce - Objects
// EXAMPLE 1: cart example
const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'Google Pixel 2',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
];

let cartItems = cart.reduce(
  (totalItems, item) => {
    console.log(item); //prints items
    totalItems.quantity += item.amount;
    totalItems.sum += item.amount * item.price;
    return totalItems;
  },
  {
    quantity: 0,
    sum: 0,
  }
);
const { quantity } = cartItems;
let { sum } = cartItems;
console.log(quantity, sum); //prints 10 and 5599.900000000001
//to make sum a proper 2 digit number, use in-built toFixed function which returns string so just parse it
sum = parseFloat(sum.toFixed(2));
console.log(sum); //prints 5599.9

//furthermore, as we already know the output's keys, directly destructure and print them as followed
let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItems += amount;
    // count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal);

// EXAMPLE 2: github repos example
const url = 'https://api.github.com/users/niravvarma/repos?per_page=100';

const fetchGitRepositories = async () => {
  const gitRepositoriesResponse = await fetch(url);
  const gitRepositories = await gitRepositoriesResponse.json();
  const gitRepoByLang = gitRepositories.reduce((gitLangRepoTotal, gitRepo) => {
    const { language } = gitRepo;
    if (language) {
      //if language is not null
      // below, first condition only works if there is value existing in gitLangRepoTotal[language]
      // undefined + 1 == false, thus, 1 is set & next time gitLangRepoTotal[language] + 1
      gitLangRepoTotal[language] = gitLangRepoTotal[language] + 1 || 1;
    }
    return gitLangRepoTotal;
  }, {});
  console.log(gitRepoByLang);
};

fetchGitRepositories();

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1
    //   } else {
    //     total[language] = 1
    //   }
    // }
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos();

//if you get error with Quokka saying 'fetch is not defined', test the functionality in browser
