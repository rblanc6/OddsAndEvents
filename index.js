// TODO: this file! :)
const form = document.querySelector("form");
const output = document.querySelector("#numberBank output");
const outputOdds = document.querySelector("#odds output");
const outputEvens = document.querySelector("#evens output");
const btnSortOne = document.querySelector("#sortOne");
const btnSortAll = document.querySelector("#sortAll");
const state = {
  bank: [],
  odd: [],
  even: [],
};

// When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.

// The number bank is not changed if the user enters a non-numeric value.
// !! HTML INPUT TYPE = NUMBER, non-numeric values not accepted.

// The number bank should display all the numbers the user has entered.

const printAllNumbers = () => {
  output.innerHTML = state.bank;
  console.log(state.bank);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  state.bank.push(`${data.get("number")}`);
  printAllNumbers();
  form.reset();
});

// When the "Sort 1" button is clicked, the first number in the number bank should be removed and placed into either the odd or even category

function sortOne() {
  if (state.bank.length > 0) {
    const num = state.bank.shift();
    if (num % 2 !== 0) {
      state.odd.push(num);
    } else {
      state.even.push(num);
    }
  }
  printAllNumbers();
}

// When the "Sort All" button is clicked, all the numbers in the number bank should be moved into either the odd or even category.

function sortAll() {
  // for (let i = 0; i < state.bank.length; i++) {
  //   if (i % 2 !== 0) {
  //     state.odd.push(state.bank[i]);
  //   } else {
  //     state.even.push(state.bank[i]);
  //   }
  // }
  state.bank.forEach((i) => {
    if (i % 2 !== 0) {
      state.odd.push(i);
    } else {
      state.even.push(i);
    }
  });
}

const printOddNumbers = () => {
  outputOdds.innerHTML = state.odd;
};

const printEvenNumbers = () => {
  outputEvens.innerHTML = state.even;
};

btnSortOne.addEventListener("click", () => {
  sortOne();
  printOddNumbers();
  printEvenNumbers();
});

btnSortAll.addEventListener("click", () => {
  sortAll();
  printOddNumbers();
  printEvenNumbers();
  output.value = "";
});
