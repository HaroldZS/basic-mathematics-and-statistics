const average = (list) => {
  let total = 0;

  for (item of list) {
    total = total + item;
  }

  return total / list.length;
};

const averageWithReduce = (list) => {
  const totalWithReduce = list.reduce((acc, item) => acc + item, 0);
  return totalWithReduce / list.length;
};

const averageWithSpread = (...values) => {
  let totalWithSpread = 0;

  for (const number of values) {
    totalWithSpread = totalWithSpread + number;
  }

  return totalWithSpread / values.length;
};

console.log(average([1, 2, 3, 4, 5]));
console.log(averageWithReduce([1, 2, 3, 4, 5]));
console.log(averageWithSpread(1, 2, 3, 4, 5, 6, 7, 8, 9));
