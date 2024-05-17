function details(name, email, age, city, state) {
    console.log("User Details", name, email, age, city, state)

    let name = document.getElementById('name').text;

    let email = document.getElementById('email');
    
    let age = document.getElementById('age').value;
    
    let city = document.getElementById('city');
    
    let state = document.getElementById('state');
    
    let output = document.getElementById('details');
    
    const emailInput = doc.querySelector('input[name="email"]');
    emailInput.required = true;
    
    if(age <= 13){
        output.innerText = "Sorry, ineligible to proceed!"
    } else{
        output.innerText = "Congratulations! You may proceed."
    }
    
}

const form = document.querySelector('.form_container');
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting if any required inputs are not filled in
  if (!validateForm()) {
    event.preventDefault();
  }
});

function validateForm() {
    const inputs = document.querySelectorAll('.form_container input[required]');
    for (const input of inputs) {
      if (input.value.trim() === '') {
        // Add an error message to the input's parent element
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'This field is required.';
        errorMessage.classList.add('error-message');
        input.parentElement.appendChild(errorMessage);
  
        // Remove the error message after a short delay
        setTimeout(() => {
          errorMessage.remove();
        }, 3000);
  
        return false;
      }
    }
  
    return true;
  }