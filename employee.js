
// localStorage.setItem('username',"Chidera");
// localStorage.setItem('lastname','Daniel')

// let user = localStorage.getItem('username');
// let last = localStorage.getItem('lastname')
// // alert(user)

// const info = document.querySelector('.info');
// info.textContent = `User info: ${user}:: ${last} `;
//clear
// localStorage.removeItem('lastname')
// localStorage.clear()

function addEmployee(event) {
    event.preventDefault();
    const employeeName = document.getElementById("employeeName").value.trim();
    const employeePosition = document.getElementById("employeePosition").value.trim();
if(employeeName && employeePosition ){

const employee = {
id:generateId(),
name:employeeName,
position:employeePosition,
}

let employees = JSON.parse(localStorage.getItem("employees"))|| [];
employees.push(employee);
localStorage.setItem("employees",JSON.stringify(employees));
document.getElementById("employeeForm").reset();
alert("Employee added successfully");
displayEmployee();
}else{
    alert("All fields are required")
}
}

function generateId(){
    return "_"+Math.random().toString(36).substring(2,9)
}

function displayEmployee(){
   let  employeeList =  document.getElementById("employeeList");
   employeeList.innerHTML = "";
    let employees = JSON.parse(localStorage.getItem("employees"))|| [];
    employees.forEach(employee => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <span>${employee.name} -- ${employee.position}</span>
        <button onClick="editEmployee('${employee.id}')" class="btn btn-primary">Edit</button>
        <button onClick="deleteEmployee('${employee.id}')" class="btn btn-danger">Delete</button>
        `

employeeList.appendChild(listItem)
    });
}

displayEmployee();

const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener("submit", addEmployee);

function deleteEmployee(id){
    const confirmAction = confirm("Are you sure you want to delete?");
    if(confirmAction){
        let employees = JSON.parse(localStorage.getItem("employees"))|| [];
        employees = employees.filter((employee)=>employee.id !==id);
        localStorage.setItem("employees",JSON.stringify(employees));
        displayEmployee();
    }
}

function editEmployee(id){
    const confirmAction = confirm("Are you sure you want to make?");
    if(confirmAction){
        let employees = JSON.parse(localStorage.getItem("employees"))|| [];
       const employee = employees.find((employee)=>employee.id === id);
       if(employee){
        const empName = prompt("enter the new employee name: ",employee.name);
        const newPosition = prompt("enter the new employee position: ",employee.position);

        if(empName && newPosition){
            employee.name = empName;
            employee.position = newPosition;
            localStorage.setItem("employees",JSON.stringify(employees));
            displayEmployee();
        }
       }else{
        alert("No such employee")
       }
    }
}