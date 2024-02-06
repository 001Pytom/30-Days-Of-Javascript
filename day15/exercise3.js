class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, curr) => acc + curr, 0);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sortedData = this.data.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }

  mode() {
    const freqMap = new Map();
    this.data.forEach((num) => {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });
    const maxFreq = Math.max(...freqMap.values());
    const modeNums = [...freqMap.entries()]
      .filter(([num, freq]) => freq === maxFreq)
      .map(([num, freq]) => num);
    return { mode: modeNums, count: maxFreq };
  }

  var() {
    const mean = this.mean();
    return (
      this.data.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0) /
      this.count()
    );
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const freqMap = new Map();
    this.data.forEach((num) => {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });
    return [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  }
}

// Test the Statistics class
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const statistics = new Statistics(ages);
console.log("Count:", statistics.count());
console.log("Sum: ", statistics.sum());
console.log("Min: ", statistics.min());
console.log("Max: ", statistics.max());
console.log("Range: ", statistics.range());
console.log("Mean: ", statistics.mean());
console.log("Median: ", statistics.median());
console.log("Mode: ", statistics.mode());
console.log("Variance: ", statistics.var());
console.log("Standard Deviation: ", statistics.std());
console.log("Frequency Distribution: ", statistics.freqDist());
//   Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = [];
    this.expenses = [];
  }

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  }

  addExpenses(description, amount) {
    this.expenses.push({ description, amount });
  }

  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  }

  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
  accountInfo() {
    return `${
      this.firstName
    } made total income: ${this.totalIncome()}   and spent a total of:${this.totalExpense()}`;
  }
}

const person = new PersonAccount("John", "Doe");
person.addIncome("Bonus", 500);
person.addExpenses("Rent", 1000);
person.addIncome("Salary", 3000);
person.addExpenses("Food", 300);

console.log(person.accountInfo());
