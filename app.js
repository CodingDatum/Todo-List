// Selectors
const todoInput = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-button");
const todoList = document.querySelector(".to-do-list");
const filterOption = document.querySelector(".our-filter");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(event) {
    event.preventDefault();
    
    // TO-DO DIV CREATION which includes a list item, and 2 buttons!
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('to-do');
    
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('to-do-item');
    todoDiv.appendChild(newTodo);
    
    //CheckMark Button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = "<i class='fas fa-check'></i>";
    checkButton.classList.add("check-button");
    todoDiv.appendChild(checkButton);
    
    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    
    //Append to list so that it is not floating in space
    todoList.appendChild(todoDiv);
    
    //Make it so after you add a value, the input text section is blank
    todoInput.value = "";
};
function deleteCheck(event){
    const item = event.target;
    if(item.classList[0] === "trash-button"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
          todo.remove();  
        });
    };
    if(item.classList[0] === "check-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    };
};
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                };
            case 'incomplete':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                };
        };
    });
};