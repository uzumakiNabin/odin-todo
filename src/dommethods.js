import { todo, note, todoManager, notesManager } from "./todo";

//Form for adding new Todo entry
const addTodoFormComponent = () => {
    let component = document.createElement('div');
    component.setAttribute('class', 'add-todo-form-container');

    let form = document.createElement('form');

    let title = document.createElement('input');
    setAttributes(title, {'type':'text', 'required':true, 'id':'todoTitle', 'name':'todoTitle'});
    let titleLabel = document.createElement('label');
    setAttributes(titleLabel, {'for':'todoTitle'});
    titleLabel.textContent = 'Title';

    let description = document.createElement('input');
    setAttributes(description, {'type': 'text', 'id': 'todoDesc', 'name': 'todoDesc'});
    let descLabel = document.createElement('label');
    setAttributes(descLabel, {'for': 'todoDesc'});
    descLabel.textContent = 'Description';

    let dueDate = document.createElement('input');
    setAttributes(dueDate, {'type': 'date', 'id': 'todoDue', 'name': 'todoDue'});
    let dueLabel = document.createElement('label');
    setAttributes(dueLabel, {'for': 'todoDue'});
    dueLabel.textContent = 'Due Date';

    let priority = document.createElement('select');
    setAttributes(priority, {'id': 'todoPriority', 'name': 'todoPriority'});
    let priorityOptions = ['low', 'medium', 'high'];
    priorityOptions.forEach((opt) => {
        let option = document.createElement('option');
        setAttributes(option, {'value': opt});
        option.textContent = opt;
        priority.appendChild(option);
    });
    let priorityLabel = document.createElement('label');
    setAttributes(priorityLabel, {'for': 'todoPriority'});
    priorityLabel.textContent = 'Priority';

    let submit = document.createElement('input');
    setAttributes(submit, {'type': 'submit', 'value': 'Add', 'class': 'btn btn-submit'});

    let clear = document.createElement('input');
    setAttributes(clear, {'type': 'reset', 'value': 'Clear', 'class': 'btn btn-clear'});

    appendChilds(form, [titleLabel, title, descLabel, description, dueLabel, dueDate, priorityLabel, priority, submit, clear]);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        todoManager.addTodo(getTodoDetails());
        //alert('Todo added');
        console.log(todoManager.allTodos);
    });

    component.appendChild(form);

    return component;
};

//get data from todo form
const getTodoDetails = () => {
    let title = document.getElementById('todoTitle').value;
    let description = document.getElementById('todoDesc').value;
    if(description === ''){
        description = 'none'
    }
    let dueDate = document.getElementById('todoDue').value;
    if(dueDate !== ''){
        dueDate = new Date(dueDate);
    }
    let priority = document.getElementById('todoPriority').value;

    let newTodo = new todo(title, description, dueDate, new Date(), priority);

    return newTodo;
}


const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    })
};

const appendChilds = (element, childs) => {
    childs.forEach((child) => {
        element.appendChild(child);
    })
};

export { addTodoFormComponent };