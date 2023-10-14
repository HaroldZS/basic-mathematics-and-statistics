const wages = require("./wages");
const StatisticTools = require("./statisticsTools");

function personAverageAnalysis(personName) {
  return StatisticTools.average(findSalaryList(personName));
}

function personMedianAnalysis(personName) {
  return StatisticTools.median(findSalaryList(personName));
}

function personModeAnalysis(personName) {
  return StatisticTools.mode(findSalaryList(personName));
}

function personSalaryProjection(personName) {
  const personSalary = findSalaryList(personName);
  const growthPercentages = calculateSalaryGrowthList(personSalary);
  const medianSalaryPercentage = StatisticTools.median(growthPercentages);
  const lastSalary = personSalary[personSalary.length - 1];
  return lastSalary + lastSalary * medianSalaryPercentage;
}

function findPerson(searchPerson) {
  return wages.find((person) => person.name === searchPerson);
}

function findSalaryList(personName) {
  const jobs = findPerson(personName).jobs;
  const salaryList = jobs.map((item) => item.salary);
  return salaryList;
}

function calculateSalaryGrowthList(list) {
  return list
    .map((salary, index, array) => {
      return (salary - array[index - 1]) / salary;
    })
    .slice(1);
}

const companies = {};

wages.forEach((person) => {
  person.jobs.forEach((record) => {
    let { company, year, salary } = record;

    if (!companies[company]) {
      companies[company] = {};
    }

    if (!companies[company][year]) {
      companies[company][year] = [];
    }

    companies[company][year].push(salary);
  });
});

console.log(personAverageAnalysis("Juanita"));
console.log(personMedianAnalysis("Juanita"));
console.log(personModeAnalysis("Juanita"));
console.log(personSalaryProjection("Juanita"));
console.log(companies);