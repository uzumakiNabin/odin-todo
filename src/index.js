import './styles/main.css';

import { todoManager, notesManager } from './todo';
import { addTodoFormComponent } from './dommethods';

let component = document.createElement('div');
component.classList.add('container');

let todoContainer = document.createElement('div');
todoContainer.classList.add('todo-container');

const showTodos = () => {
    todoContainer.innerHTML = '';
    todoManager.allTodos.forEach((todo) => {
        let todoElement = document.createElement('div');

        let todoTitle = document.createElement('h4');
        todoTitle.textContent = todo.title;

        let todoDesc = document.createElement('p');
        todoDesc.textContent = todo.description;

        let todoDue = document.createElement('p');
        todoDue.textContent = todo.dueDate;

        todoElement.appendChild(todoTitle);
        todoElement.appendChild(todoDesc);
        todoElement.appendChild(todoDue);

        todoContainer.appendChild(todoElement);
    });
};

showTodos();

component.appendChild(todoContainer);

let addTodoButton = document.createElement('button');
addTodoButton.textContent = "Add Default ToDo";
addTodoButton.addEventListener('click', () => {
    todoManager.addTodo();
    showTodos();
});

component.appendChild(addTodoButton);

component.appendChild(addTodoFormComponent());

document.body.appendChild(component);