import events from "./pubsub";
import app from "./index";
import { renderAllTasks, renderProjectList } from './displayController';


const addTodoPopup = (() => {
    // add-todo button
    const addTodoButton = document.querySelector("#add-todo-button");
    addTodoButton.addEventListener("click", displayAddTodo);

    function displayAddTodo() {
        // Generate Add Todo Popup
        const body = document.querySelector("body");

        const addTodoPopup = document.createElement("div");
        addTodoPopup.id = "add-todo-popup";

        const header = document.createElement("div");
        header.id = "add-todo-header";
        header.textContent = "New Task"
        addTodoPopup.appendChild(header);

        const content = document.createElement("form");
        content.id = "add-todo-content";
        addTodoPopup.appendChild(content);

        const title = document.createElement("input");
        title.id = "add-todo-title";
        title.placeholder = "Add title";
        title.maxlength = "30";
        title.required = true;
        content.appendChild(title);

        const description = document.createElement("textarea");
        description.id = "add-todo-description";
        description.placeholder = "Add description";
        description.maxlength = "150";
        description.cols = "50";
        description.rows = "4";
        content.appendChild(description);

        const dateLabel = document.createElement("label");
        dateLabel.for = "add-todo-date";
        dateLabel.textContent = "Due date: ";
        content.appendChild(dateLabel);

        const date = document.createElement("input");
        date.type = "date";
        date.id = "add-todo-date";
        date.required = true;
        content.appendChild(date);

        const projectLabel = document.createElement("label");
        projectLabel.for = "add-todo-project";
        projectLabel.textContent = "Add to project: ";
        content.appendChild(projectLabel);

        const projectSelect = document.createElement("select");
        projectSelect.id = "add-todo-project";
        projectSelect.required = true;

        app.projects.forEach(project => {
            let option = document.createElement("option");
            option.value = project;
            option.textContent = project;
            projectSelect.appendChild(option);
        });

        content.appendChild(projectSelect);

        const priorityLabel = document.createElement("label");
        priorityLabel.for = "add-todo-priority";
        priorityLabel.textContent = "Add priority level: ";
        content.appendChild(priorityLabel);

        const priority = document.createElement("select");
        priority.id = "add-todo-priority";
        priority.required = true;

        const priority1 = document.createElement("option");
        priority1.value = "normal";
        priority1.textContent = "Normal";
        priority.appendChild(priority1);

        const priority2 = document.createElement("option");
        priority2.value = "med";
        priority2.textContent = "Medium";
        priority.appendChild(priority2);

        const priority3 = document.createElement("option");
        priority3.value = "high";
        priority3.textContent = "High";
        priority.appendChild(priority3);

        content.appendChild(priority);

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "add-todo-button-container";
        addTodoPopup.appendChild(buttonContainer);

        const save = document.createElement("button");
        save.id = "add-todo-save";
        save.textContent = "Save";
        buttonContainer.appendChild(save);

        // Publish "Add new todo" event
        save.addEventListener("click", () => {
            events.emit("User inputs new todo", [title.value, description.value, date.value, projectSelect.options[projectSelect.selectedIndex].value, priority.options[priority.selectedIndex].value]);
        })

        const cancel = document.createElement("button");
        cancel.id = "add-todo-cancel";
        cancel.textContent = "Cancel";
        buttonContainer.appendChild(cancel);

        // Cancel button closes popup
        cancel.addEventListener("click", removeAddTodoPopup);

        // Create transparent overlay behind popup
        const addTodoOverlay = document.createElement("div");
        addTodoOverlay.id = "overlay";

        // If new todo successfully added, close popup
        events.on("todos changed", removeAddTodoPopup);

        body.appendChild(addTodoPopup);
        body.appendChild(addTodoOverlay);
    }

    function removeAddTodoPopup() {
        const body = document.querySelector("body");
        const addTodoPopup = document.querySelector("#add-todo-popup");
        const addTodoOverlay = document.querySelector("#overlay");
        console.log(body.removeChild(addTodoPopup));
        console.log(body.removeChild(addTodoOverlay));
    }
})();

const addProjectPopup = (() => {
    const addProjectButton = document.querySelector("#add-project-button");
    addProjectButton.addEventListener("click", displayAddProject);

    function displayAddProject() {
        // Generate Add Todo Popup. Anchor to sidebar.
        const sidebar = document.querySelector("#sidebar");

        const addProjectPopup = document.createElement("div");
        addProjectPopup.id = "add-project-popup";
        sidebar.appendChild(addProjectPopup);

        const header = document.createElement("div");
        header.id = "add-project-header";
        header.textContent = "New Project"
        addProjectPopup.appendChild(header);

        const title = document.createElement("input");
        title.id = "add-project-title";
        title.placeholder = "Add title";
        title.maxlength = "30";
        title.required = true;
        addProjectPopup.appendChild(title);

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "add-project-button-container";
        addProjectPopup.appendChild(buttonContainer);

        const save = document.createElement("button");
        save.id = "add-project-save";
        save.textContent = "Save";
        buttonContainer.appendChild(save);

        // Send user input to app for error checking
        save.addEventListener("click", () => {
            events.emit("User inputs new project", title.value);
        })

        const cancel = document.createElement("button");
        cancel.id = "add-project-cancel";
        cancel.textContent = "Cancel";
        buttonContainer.appendChild(cancel);

        // Create transparent overlay behind popup
        const overlay = document.createElement("div");
        overlay.id = "overlay";
        sidebar.appendChild(overlay);

        // Ways to close popup
        cancel.addEventListener("click", removeAddProjectPopup);
        overlay.addEventListener("click", removeAddProjectPopup);
        events.on("Projects changed", removeAddProjectPopup);
    }

    function removeAddProjectPopup() {
        const sidebar = document.querySelector("#sidebar");
        const addProjectPopup = document.querySelector("#add-project-popup");
        const overlay = document.querySelector("#overlay");
        sidebar.removeChild(addProjectPopup);
        sidebar.removeChild(overlay);
    }
})();

const editTodoPopup = (() => {
    function displayEditTodo(e) {
        console.log(this);
        e.stopPropagation();
    }

    return { displayEditTodo };
})();

const deleteTodoPopup = (() => {
    function displayDeleteTodo(e) {
        console.log(this);
        e.stopPropagation();
    }

    return { displayDeleteTodo };
})();

export { editTodoPopup, deleteTodoPopup };