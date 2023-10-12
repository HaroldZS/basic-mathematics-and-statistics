const frequencyList = (list) => {
  const countList = {};

  for (const item of list) {
    if (countList[item]) {
      countList[item] += 1;
    } else {
      countList[item] = 1;
    }
  }

  return countList;
};

const mode = (list) => {
  const entries = Object.entries(frequencyList(list));
  return entries.sort((a, b) => b[1] - a[1])[0][0];
};

console.log(mode([1, 2, 3, 4, 5, 5]));