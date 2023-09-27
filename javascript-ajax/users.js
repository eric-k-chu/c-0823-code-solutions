const $userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (const obj of xhr.response) {
    const $li = document.createElement('li');
    $li.textContent = obj.name;
    $userList.appendChild($li);
  }
});
xhr.send();
