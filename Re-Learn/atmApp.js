let balance = 8000;
function deposit(amount) {
    
  balance += amount;
  alert(
    "You deposited " +
      amount +
      " successfully\n\nYour current balance is now " +
      balance
  );
}

function withdrawal(amount) {
  if (amount > balance) {
    alert("Sorry, you don't have enough money in your account");
  } else {
    balance -= amount;
    alert(
      "You withdrew " +
        amount +
        " successfully\n\nYour current balance is " +
        balance
    );
  }
}

function transfer(amount) {
  if (amount > balance) {
    alert("Sorry, you don't have enough money in your account");
  } else {
    balance -= amount;
    alert(
      "You have successfully transfered " + amount + " from your account to..."
    );
  }
}

function inquiry(){
    alert('Current Balance: '+balance);
}

function display(){
  let choice;
  let tryAgain;
  do{
    choice=parseInt(prompt("***Choose an option:****\n1. Deposit \n2. Withdrawal \n3. Transfer \n4:Inquiry\n5:Exit"));
    switch(choice){
        case 1:
            deposit(parseFloat(prompt("Enter the amount to deposit:")));
            break;
        case 2:
            withdrawal(parseFloat(prompt("Enter the amount to withdraw:")));
            break;
        case 3:
            transfer(parseFloat(prompt("Enter the amount to transfer:")));
            break;
        case 4:
            inquiry();
            break;
        case 5:
            alert("Thank you for using our banking system!");
            tryAgain = 'no';
            break;
        default:
            alert("Invalid choice");

    }
    if(choice !==5){
    tryAgain =prompt("Do you want to perform another transaction? (yes/no)").toLowerCase();
    }  
}while(tryAgain==='yes')


}