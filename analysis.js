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
  const salaryGrowthPercentages = calculateGrowthList(personSalary);
  const medianSalaryPercentage = StatisticTools.median(salaryGrowthPercentages);
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

function calculateGrowthList(list) {
  return list
    .map((value, index, array) => {
      return (value - array[index - 1]) / value;
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

function companyMedianSalaryPerYear(company, year) {
  if (!companies[company]) {
    console.warn("Invalid company name");
    return;
  }
  if (!companies[company][year]) {
    console.warn("Invalid year per company");
    return;
  }
  return StatisticTools.median(companies[company][year]);
}

function companySalaryProjection(name) {
  if (!companies[name]) {
    console.warn("Invalid company name");
  } else {
    const years = Object.keys(companies[name]);
    const mediansPerYear = years.map((year) =>
      StatisticTools.median(companies[name][year])
    );
    const medianGrowthPercentages = StatisticTools.median(
      calculateGrowthList(mediansPerYear)
    );
    const lastMedian = mediansPerYear[mediansPerYear.length - 1];
    return lastMedian + lastMedian * medianGrowthPercentages;
  }
}

console.log(personAverageAnalysis("Juanita"));
console.log(personMedianAnalysis("Juanita"));
console.log(personModeAnalysis("Juanita"));
console.log(personSalaryProjection("Juanita"));
console.log(companies);
console.log(companyMedianSalaryPerYear("Wayne Enterprises", 2018));
console.log(companySalaryProjection("Wayne Enterprises"));
console.log(companies["Wayne Enterprises"]);
