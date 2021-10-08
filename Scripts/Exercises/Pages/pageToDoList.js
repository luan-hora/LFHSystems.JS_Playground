var txtToDoItem;
var btnAddToDo;
var toDos;

var toDoList;

var objToDo;

var toDoText;

initializeComponents();
prepareEventListeners();

function initializeComponents() {
    txtToDoItem = document.getElementById('txtToDoItem');
    toDoList = document.getElementById('todos');
    btnAddToDo = document.getElementById('btnAddToDo');

    objToDo = new ToDo(txtToDoItem.value);
}

function prepareEventListeners() {
    btnAddToDo.addEventListener('click', addToDo);
}

function addToDo() {
    toDoText = txtToDoItem.value;

    if (validateToDoItem()) {
        objToDo.addToDoItem(toDoText);
    }

    loadToDo();
}

function loadToDo() {
    debugger;
    toDoList.innerHTML = '';

    toDos = objToDo.getToDoList();

    toDos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = todo;
        toDoList.appendChild(li);
        localStorage.setItem('todos', JSON.stringify(toDos));        
    });
}

function validateToDoItem() {
    var ret = true;
    var mensagensInconsistencia = [];

    if (toDoText == undefined || toDoText == '')
        mensagensInconsistencia.push('Valor informado no campo 1º valor não é válido. <br>');

    if (mensagensInconsistencia.length > 0) {
        ret = false;
        Swal.fire({
            title: 'Error!',
            html: ('Alguns campos não foram preenchidos: <br>' + mensagensInconsistencia),
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }

    return ret;
}