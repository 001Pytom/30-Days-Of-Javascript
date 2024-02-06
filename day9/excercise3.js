// Use the countries information, in the data folder. Sort countries by name, by capital, by population

const statistics = {
  data: [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
  ],

  count: function () {
    return this.data.length;
  },

  sum: function () {
    return this.data.reduce((acc, val) => acc + val, 0);
  },

  min: function () {
    return Math.min(...this.data);
  },

  max: function () {
    return Math.max(...this.data);
  },

  range: function () {
    return this.max() - this.min();
  },

  mean: function () {
    return this.sum() / this.count();
  },

  median: function () {
    const sortedData = this.data.sort((a, b) => a - b);
    const middle = Math.floor(this.count() / 2);
    return this.count() % 2 === 0
      ? (sortedData[middle - 1] + sortedData[middle]) / 2
      : sortedData[middle];
  },

  mode: function () {
    const countMap = {};
    this.data.forEach((num) => {
      countMap[num] = (countMap[num] || 0) + 1;
    });

    let maxCount = 0;
    let modes = [];
    for (const num in countMap) {
      if (countMap[num] > maxCount) {
        maxCount = countMap[num];
        modes = [parseInt(num)];
      } else if (countMap[num] === maxCount) {
        modes.push(parseInt(num));
      }
    }

    return { mode: modes, count: maxCount };
  },

  var: function () {
    const mean = this.mean();
    const squaredDiffs = this.data.map((num) => Math.pow(num - mean, 2));
    return this.sum(squaredDiffs) / this.count();
  },

  std: function () {
    return Math.sqrt(this.var());
  },

  freqDist: function () {
    const countMap = {};
    this.data.forEach((num) => {
      countMap[num] = (countMap[num] || 0) + 1;
    });

    return Object.entries(countMap)
      .map(([num, count]) => [parseFloat(num), count])
      .sort((a, b) => b[1] - a[1]);
  },
};

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // { mode: [26], count: 5 }
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Frequency Distribution: ", statistics.freqDist());

 