let option = parseInt(prompt("Select from menu:\n1: Deposit\n2: Transfer\n3: Exit"));
switch (option) {
    case 1:
        console.log("You selected Deposit!");
        break;
    case 2:
        console.log("You selected Transfer!");
        break;
    case 3:
        console.log("You selected Exit");
        break;
    default:
        console.log("Invalid option");
}