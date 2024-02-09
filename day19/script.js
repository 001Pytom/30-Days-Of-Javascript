// closure
// practice
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
const innerFunc = outerFunction();

function outerFunction() {
  let count = 0;

  function plusOne() {
    count++;
    return count;
  }

  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);

// exercise1
// Create a closure which has one inner function

function outerFunc() {
  let sum = 0;
  let nums = [1, 2, 3, 4, 5];
  function addNum() {
    nums.forEach((num) => {
      sum += num;
    });
    return sum;
  }
  return { addNum: addNum() };
}
let myInnerFunc = outerFunc();

console.log(myInnerFunc.addNum);

// exercise 2
// Create a closure which has three inner functions
function outerFunc2() {
  let newSum = 0;
  let newMul = 1;
  let newNums = [1, 2, 3, 4, 5];

  //   function to add nums
  function addNum() {
    newNums.forEach((num) => {
      newSum += num;
    });
    return newSum;
  }

  //   function to multipy nums
  function mulnum() {
    newNums.forEach((num) => {
      newMul *= num;
    });
    return newMul;
  }

  //   to get average
  function average() {
    let total = newNums.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    let avr = total / newNums.length;
    return avr;
  }
  return { addNum: addNum(), mulnum: mulnum(), average: average() };
}

let myNewInner = outerFunc2();
console.log(myNewInner.addNum);
console.log(myNewInner.mulnum);
console.log(myNewInner.average);

//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(firstName, lastName) {
  // Inner variables
  let incomes = [];
  let expenses = [];

  // Inner functions
  function totalIncome() {
    return incomes.reduce((total, income) => total + income.amount, 0);
  }

  function totalExpense() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  function addIncome(description, amount) {
    incomes.push({ description, amount });
  }

  function addExpense(description, amount) {
    expenses.push({ description, amount });
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  function accountInfo() {
    let incomeDetails = incomes.map(
      (income) => `${income.description}: ${income.amount}`
    );
    let expenseDetails = expenses.map(
      (expense) => `${expense.description}: ${expense.amount}`
    );
    return `${firstName} ${lastName}'s Account\n-------------------------\nIncome:\n${incomeDetails.join(
      "\n"
    )}\n\nExpense:\n${expenseDetails.join(
      "\n"
    )}\n\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}\nAccount Balance: ${accountBalance()}`;
  }

  return {
    addIncome,
    addExpense,
    accountInfo,
  };
}

const myAccount = personAccount("John", "Doe");
myAccount.addIncome("Salary", 3000);
myAccount.addExpense("Rent", 1000);
myAccount.addExpense("Utilities", 200);
console.log(myAccount.accountInfo());
