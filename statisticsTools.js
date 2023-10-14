const StatisticsTools = {};

const average = (list) => {
  return list.reduce((acc, item) => acc + item, 0) / list.length;
};

const median = (list) => {
  let index = Math.round(list.length / 2) - 1;
  list = sortList(list);
  if (list.length % 2) {
    return list[index];
  } else {
    return (list[index] + list[index + 1]) / 2;
  }
};

const mode = (list) => {
  const entries = Object.entries(frequencyList(list));
  return entries.sort((a, b) => b[1] - a[1])[0][0];
};

const sortList = (list) => {
  return list.sort((a, b) => a - b);
};

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

StatisticsTools.average = average;
StatisticsTools.median = median;
StatisticsTools.mode = mode;
StatisticsTools.sort = sortList;
StatisticsTools.frequency = frequencyList;

module.exports = StatisticsTools;
