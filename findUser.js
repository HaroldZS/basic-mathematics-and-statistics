const users = [];
users.push({ id: 123, name: "Harold Zurita" });
users.push({ id: 456, name: "Harold Zurita Simon" });

function solution(users, id) {
  const user = users.find((user) => user.id === id);
  return user ? user.name : false;
}

console.log(solution(users, 456));
console.log(solution(users, 999));
