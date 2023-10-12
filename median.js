const median = (list) => {
  let index = Math.round(list.length / 2) - 1;
  if (list.length % 2) {
    return list[index];
  } else {
    return (list[index] + list[index + 1]) / 2;
  }
};

console.log(median([1, 2, 3, 4, 5]));
console.log(
  median([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
);
