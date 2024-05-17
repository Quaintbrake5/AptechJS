document.getElementById('addTodo').addEventListener('click', function() {
    let todoText = document.getElementById('todoInput').value.trim();
    if (todoText) {
        addTodo(todoText);
        document.getElementById('todoInput').value = '';
    }
});

function addTodo(text) {
    let li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    document.getElementById('todoList').appendChild(li);
}

document.getElementById('clearTodos').addEventListener('click', function() {
    let todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});