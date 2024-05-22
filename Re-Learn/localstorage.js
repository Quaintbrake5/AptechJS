// //set local storage
// localStorage.setItem("firstName", "Denzyl")
// //get values from local storage
// let firstName = localStorage.getItem('firstName')
// console.log(firstName)

// //delete key from local storage
// localStorage.removeItem('firstName')

// //create person object
// const person = {
//     firstName: "Denzyl",
//     lastName: 'Ibe',
//     age: 16,
// };

// //store person to local Storage
// localStorage.setItem('person', JSON.stringify(person))

// //get person from local storage
// let personString = localStorage.getItem('person')
// console.log(typeof JSON.parse(personString));
// localStorage.clear();

function addNewEmployee(){
    if(fullName & department) {
        id: generateId(),
        fullName,
        department,
    };
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee)
    localStorage.setItem(employees, JSON.stringify(employees))
}

function
