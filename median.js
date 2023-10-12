const median = (list) => {
  let index = Math.round(list.length / 2) - 1;
  if (list.length % 2) {
    return list[index];
  } else {
    return (list[index] + list[index + 1]) / 2;
  }
};

const sortList = (list) => {
  return list.sort((a, b) => a - b);
};

console.log(median(sortList([3, 2, 1, 5, 4])));
console.log(median(sortList([10, 20, 1000, 30])));
