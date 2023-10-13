const geometricAverage = (list) => {
  return Math.round(
    Math.pow(
      list.reduce((acc, value) => acc * value, 1),
      1 / list.length
    )
  );
};

console.log(geometricAverage([2, 4, 8]));