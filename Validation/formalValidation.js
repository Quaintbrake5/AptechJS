const registrationForm = document.querySelector('#registrationForm');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');


const validateFullName = ()=>{
    if(fullName.value.trim()=== ""){
        fullNameError.textContent= 'Full Name is Required!';
        return false;
    }
    fullNameError.textContent="";
    return true;
};

const validateEmail = ()=>{
    if(email.value.trim()===''){
        emailError.textContent= 'Email is Required!';
        return false;
    }
    else if(!/^\S+@\S+\.\S+$/.test(email)){
        emailError.textContent='Invalid Email Address!';
        return false;
    }
    emailError.textContent='';
    return true;
};

const validatePassword= ()=>{
    if(password.value.length === ''){
        passwordError.textContent = 'Password cannot be empty!';
        return false;
    }

    else if(password.value.length <5){
        passwordError.textContent = 'Password is too weak!';
        return false;
    }
    passwordError.textContent = '';
    return true;
};

function validateForm(){
    const fullValidation = validateFullName;
    const emailValidation = validateEmail;
    const passwordValidation = validatePassword;

    return fullValidation && emailValidation && passwordValidation;
}

registrationForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    //console.log(events);
    if(validateForm()){
        console.log('Congratulations! Your details have been submitted.');
    } else{
        console.log('Please fill in form adequately!');
    }
})

fullName.addEventListener()