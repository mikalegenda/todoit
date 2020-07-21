// Selectors
const todoInput = document.querySelector(".todo__input"),
    todoButton = document.querySelector(".todo__button"),
    todoList = document.querySelector(".todo__list");
filterOption = document.querySelector(".todo__filter");


// Events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    //Create the ToDo item
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo__item");
    // Create list item
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo__text");
    todoItem.appendChild(newTodo);
    //Create check mark button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("btn--complete");
    todoItem.appendChild(completedButton);
    //Create delete button 
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
    deleteButton.classList.add("btn--delete");
    todoItem.appendChild(deleteButton);
    // Append to list
    todoList.appendChild(todoItem);
    // Clear input
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // Delete functionality
    if (item.classList[0] === "btn--delete") {
        const todo = item.parentElement;
        todo.remove();
    }

    // Check mark functionality
    if (item.classList[0] === "btn--complete") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
        }
    });
}

function saveLocalTodos(todo) {

}