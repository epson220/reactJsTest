const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];

nextTodos[0].checked = false;

console.log(todos[0]);
console.log(nextTodos[0]);
console.log(todos[0] === nextTodos[0]);

nextTodos[0] = {
  ...nextTodos[0],
  checked: false,
};

console.log(todos[0] === nextTodos[0]);

const array = [1, 2, 3, 4, 5];
const nextArrayGood = [...array];
nextArrayGood[0] = 100;
console.log(array[0] === nextArrayGood[0]);
