// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  const employees = [];

  let addingEmployees = true;

  while (addingEmployees) {
    const firstName = prompt('Enter employee first name:');
    const lastName = prompt('Enter employee last name:');
    let salary = parseFloat(prompt('Enter employee salary:'));

    // Validate salary input
    if (isNaN(salary)) {
      salary = 0; // Default to $0 if salary is not a number
    }

    // Create employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);

    const continueAdding = confirm('Do you want to add another employee?');
    if (!continueAdding) {
      addingEmployees = false;
    }
  }

  return employees;
}
  // TODO: Get user input to create and return an array of employee objec

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees to calculate average salary.');
    return;
  }

  const totalSalary = employeesArray.reduce((acc, emp) => acc + emp.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Total Employees: ${employeesArray.length}`);
  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees to select a random employee.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
