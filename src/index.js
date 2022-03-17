import './style.css';
import events from "./pubsub";
import displayController from './displayController';

// INDEX.JS - application logic
//     Todos array
//         Create a todo
//         Complete a todo
//         Change todo properties

//     Projects array
//         Create a project
//         Delete a project

//     Completed Todos array?

const app = (() => {
    let todos = [];

    // todo factory function
    function todoFactory(title, description, dueDate, project, priority) {
        return { title, description, dueDate, project, priority };
    }

    // Pre-fill todos array
    const todo1 = todoFactory("Haircut at 9", "Haircut at 9 at Great Clips with Aaron as your barber", "03/17/22", "Personal", "medium");
    const todo2 = todoFactory("Shop for paint", "Go to Sherwin Williams next to barber and pick out sample colors for guest bedroom", "03/17/22", "Personal", "normal");
    const todo3 = todoFactory("Send work schedule", "Email Bob my work schedule for next month", "03/20/22", "Work", "high");
    todos.push(todo1, todo2, todo3);

    events.emit("todos changed", todos);
})();