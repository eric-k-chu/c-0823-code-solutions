const business = {
  opens: '9:00',
  closes: '17:00',
  totalEmployees: 4,
  daysOpen: ['M', 'Tu', 'W', 'Th', 'F'],
  employees: {
    jane: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    homer: {
      position: 'Developer',
      daysOfWeekWorking: ['M', 'Tu', 'W', 'Th', 'F'],
    },
    garfield: {
      position: 'Accountant',
      daysOfWeekWorking: ['M', 'F'],
    },
    risa: {
      position: 'Janitor',
      daysOfWeekWorking: ['Tu', 'Th'],
    },
  },
};

const jobOpenings = ['Senior Developer', 'HR Manager', 'Clerk', 'Animator'];

window.addEventListener('DOMContentLoaded', () => {
  addWeekends();
  for (const employee in business.employees) {
    checkIfFullTime(employee);
  }
  addEmployees();
  deleteEmployee('homer');
  console.log('business after: ', business);
});

function addWeekends() {
  business.daysOpen.push('Sa', 'Su');
  for (const employee in business.employees) {
    business.employees[employee].daysOfWeekWorking.push('Sa', 'Su');
  }
}

function assignRandomWorkdays(name) {
  const randomAmountOfDays = Math.floor(Math.random() * 5) + 1;
  const days = JSON.parse(JSON.stringify(business.daysOpen));
  for (let i = 0; i < randomAmountOfDays; i++) {
    const randomDay = Math.floor(Math.random() * days.length);
    business.employees[name].daysOfWeekWorking.push(days[randomDay]);
    days.splice(randomDay, 1);
  }
}

function checkIfFullTime(name) {
  if (business.employees[name].daysOfWeekWorking.length >= 5) {
    business.employees[name].fullTime = true;
  } else {
    business.employees[name].fullTime = false;
  }
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    let count = 0;
    for (const user in xhr.response) {
      if (count < 4) {
        const name = xhr.response[user].name.split(' ')[1];
        business.employees[name] = {
          position: jobOpenings.pop(),
          daysOfWeekWorking: [],
        };
        assignRandomWorkdays(name);
        checkIfFullTime(name);
        business.totalEmployees++;
      }
      count++;
    }
  });
  xhr.send();
}
