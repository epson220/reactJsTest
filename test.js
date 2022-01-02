const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];

console.log(todos);
console.log(nextTodos);

nextTodos[0].checked = false;

console.log(todos[0] === nextTodos[0]);
