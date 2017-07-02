var employees = ['A','B','C'];
let [emp1,emp2,emp3] = employees;

// su dung rest parameters
let [e1,...e2] = employees;

console.log(emp1);
console.log(emp2);
console.log(emp3);

console.log(e1);
console.log(e2);