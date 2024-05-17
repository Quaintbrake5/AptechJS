const textBox = document.querySelector('.textbox');
console.log(textBox)


textBox.addEventListener('keyup', (e)=> {
    console.log();
    console.log(e);
    output.textContent = e.target.value;
})