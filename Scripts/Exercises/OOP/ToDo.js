class ToDo {
    constructor(toDoItem) {
        this.ToDoItem = toDoItem;
        this.TodoList = [];
    }

     addToDoItem(toDoItem) {
        this.TodoList.push(toDoItem);        
        // const li = document.createElement('li')
        // li.innerHTML = toDoItem;
        // TodoList.appendChild(li);
        // localStorage.setItem('todos', JSON.stringify(this.TodoList));
    }

    getToDoList(){
        return this.TodoList;
    }
}