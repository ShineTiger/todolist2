const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos"

function setSaveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}


function deleteTodo(event) {
    const li = event.target.parentElement;
    
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    setSaveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button); 
    todoList.appendChild(li);

}

function handleTodoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
   
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo, 
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    setSaveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
//지우고싶은 아이템을 제외exclude 한다. 
