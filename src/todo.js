const todos = [];
const notes = [];

class todo{
    constructor(title, description, dueDate, entryDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.entryDate = entryDate;
        this.priority = priority;
    };
};

class note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

const DOM = (() => {

})();

const todoManager = (() => {
    return {
        allTodos:  todos,
        addTodo: function(todo) {
            todos.push(todo);
        }
    }
})();

const notesManager = (() => {
    return {
        allNotes: notes,
        addNote: function() {
            notes.push(new note());
        }
    }
})();

export { todo, note, todoManager, notesManager };