let btn = document.getElementById('saveButton');
let userList = document.getElementById('userList');
const users = [];

btn.addEventListener('click', ()=>{
    let fullName = document.getElementById('Name').value;
    let Gender = document.getElementById('Gender').value;
    if(!fullName){
        alert('Please enter full name!')
    }

    if(!Gender){
        alert('Please select gender!')
    }
    const user = saveUser(fullName, Gender);
    if(!user){
        throw new Error('Oops! Something went wrong, try again')
        return;
    }
    console.log(user);
    // console.log(users);
});

function saveUser(full_Name, Gender){
    const obj = {}
    if (users.indexOf(full_Name) === -1) {
        alert('User with name already exists');
    }
    obj['name'] = full_Name;
    obj['gender'] = Gender;
    users.push(obj)
    return(users);
}


function displayUser(){
    userList.innerHTML = '';
    users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.Gender}</td>
        `;
        userList.appendChild(row);
    });
}
displayUser()
