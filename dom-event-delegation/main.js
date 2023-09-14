const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', (event) => {
  console.log(
    'event target: ',
    event.target,
    'event target tag name: ',
    event.target.tagName
  );
  if (event.target && event.target.tagName === 'BUTTON') {
    const taskListItem = event.target.closest('.task-list-item');
    console.log('closest: ', taskListItem);
    taskListItem.remove();
  }
});
