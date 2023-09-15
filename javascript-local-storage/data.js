/* exported todos */

let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function (event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
