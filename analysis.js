const wages = require("./wages");
const StatisticTools = require("./statisticsTools");

function findPerson(searchPerson) {
  return wages.find((person) => person.name === searchPerson);
}

function findSalaryList(personName) {
  const jobs = findPerson(personName).jobs;
  const salaryList = jobs.map((item) => item.salary);
  return salaryList;
}

function personAverageAnalysis(personName) {
  return StatisticTools.average(findSalaryList(personName));
}

function personMedianAnalysis(personName) {
  return StatisticTools.median(findSalaryList(personName));
}

function personModeAnalysis(personName) {
  return StatisticTools.mode(findSalaryList(personName));
}

console.log(personAverageAnalysis("Juanita"));
console.log(personMedianAnalysis("Juanita"));
console.log(personModeAnalysis("Juanita"));
