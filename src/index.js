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

    // Render DOM
    const main = document.querySelector("#main");

    todos.forEach(todo => {
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
            // Add checkbox ID
        todoContainer.appendChild(checkbox);

        const todoTitle = document.createElement("span");
        todoTitle.textContent = todo.title;
        todoContainer.appendChild(todoTitle);

        const dueDate = document.createElement("span");
        dueDate.classList.add("due-date");
        dueDate.textContent = todo.dueDate;
        todoContainer.appendChild(dueDate);

        const projectLabel = document.createElement("span");
        projectLabel.classList.add("project-label");
        projectLabel.textContent = todo.project;
        todoContainer.appendChild(projectLabel);

        const priority = document.createElement("span");
        if (todo.priority === "normal") {
            priority.classList.add("priority-normal");
        } else if (todo.priority === "medium") {
            priority.classList.add("priority-med");
        } else if (todo.priority === "high") {
            priority.classList.add("priority-high");
        }
        todoContainer.appendChild(priority);

        main.appendChild(todoContainer);
    });
})();