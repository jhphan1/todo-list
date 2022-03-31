import events from "./pubsub";
import app from "./index";
import { editTodoPopup } from "./popups";
import { format, parseISO, parse } from 'date-fns';

// Renders page using todos array sorted by due date
function renderPage(pageTitle, todosArray) {
    const main = document.querySelector("#main");

    // Remove current todo elements on page
    while (main.childNodes.length > 1) {
        main.removeChild(main.lastChild);
    }

    // Render title
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = pageTitle;
    main.appendChild(title);

    // Sort todos array by due date (ascending order)
    todosArray.sort((a, b) => {
        if (a.dueDate < b.dueDate) return -1;
        if (a.dueDate > b.dueDate) return 1;
        if (a.dueDate == b.dueDate) return 0;
    })

    // Sort completed todos to the bottom of list
    todosArray.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        if (a.completed && b.completed || !a.completed && !b.completed) return 0;
    })

    // Render todos list
    todosArray.forEach(todo => {
        const todoContainer = document.createElement("div");
        // Change appearance of todo based on 'completed' property
        if (todo.completed === false) {
            todoContainer.classList.add("todo");
        } else {
            todoContainer.classList.add("todo-completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        // Render with checked box if todo completed
        checkbox.checked = (todo.completed) ? true : false;
        // Tell app when user completes/un-completes todo
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                events.emit("User completes todo", todoTitle.textContent);
            } else {
                events.emit("User un-completes todo", todoTitle.textContent);
            }
        })
        // Clicking checkbox doesn't expand todo
        checkbox.addEventListener("click", e => e.stopPropagation());
        
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

        // Hidden elements that expand when todo is clicked
        todoContainer.addEventListener("click", () => {
            // Toggle on/off
            if (todoContainer.childNodes.length > 5) {
                todoContainer.removeChild(todoContainer.lastChild);
            } else {
                const todoExpanded = document.createElement("div");
                todoExpanded.classList.add("todo-expanded");
                todoContainer.appendChild(todoExpanded);

                const description = document.createElement("div");
                description.textContent = todo.description;
                todoExpanded.appendChild(description);

                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("expanded-todo-button-container");
                todoExpanded.appendChild(buttonContainer);

                const edit = document.createElement("button");
                edit.id = "edit-todo-button";
                edit.textContent = "Edit";
                buttonContainer.appendChild(edit);

                const trash = document.createElement("button");
                trash.id = "trash-todo-button";
                trash.textContent = "Delete";
                buttonContainer.appendChild(trash);

                trash.addEventListener("click", (e) => {
                    let targetObject = e.target.parentNode.parentNode.parentNode.children[1].textContent;
                    events.emit("User deletes todo", targetObject);
                });

                edit.addEventListener("click", editTodoPopup.displayEditTodo);
            }
        });
    })
}

// Renders all todos onto page
const renderAllTasks = (() => {
    // events.on("todos changed", render);

    function render(todos) {
        renderPage("All Tasks", todos);
    }
})();

// Renders only todos due today
const renderToday = (() => {
    events.on("todos changed", render);

    function render(todos) {
        // Set today's date
        let today = format((new Date()), 'MM/dd/yy');
        
        // Filter for only todos due today
        let todaysTodos = todos.filter(todo => todo.dueDate === today);

        // Render new todos list
        renderPage("Today", todaysTodos);
    }
})();

const renderProjectList = (() => {
    const projectContainer = document.querySelector("#project-container");

    events.on("Projects changed", render)

    function render(projects) {
        // Remove current project elements
        while (projectContainer.childNodes.length > 0) {
            projectContainer.removeChild(projectContainer.lastChild);
        }

        // Generate new list
        projects.forEach(project => {
            const submenu = document.createElement("div");
            submenu.classList.add("submenu");
            
            const icon = document.createElement("img");
            icon.src = "../src/img/project-item.png";
            icon.alt = "project-item";
            submenu.appendChild(icon);

            const title = document.createElement("span");
            title.textContent = project;
            submenu.appendChild(title);

            projectContainer.appendChild(submenu);
        })
    }
})();

export { renderAllTasks, renderProjectList };