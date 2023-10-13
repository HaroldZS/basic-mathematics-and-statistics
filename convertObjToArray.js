const obj = {
  123: "Harold Zurita",
  456: "Harold Zurita Simon",
};

function solution(obj) {
  return Object.entries(obj).map((item) => {
    return {
      id: item[0],
      name: item[1],
    };
  });
}

console.log(solution(obj));
