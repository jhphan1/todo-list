import events from "./pubsub";

const displayController = (() => {
    events.on("todos changed", renderAllTasks);

    function renderAllTasks(todos) {
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
        })
    }

    // add-todo button
    const addTodoButton = document.querySelector("#add-todo");
    addTodoButton.addEventListener("click", displayAddTodo);

    function displayAddTodo() {
        const body = document.querySelector("body");

        const addTodoPopup = document.createElement("div");
        addTodoPopup.id = "add-todo-popup";

        const header = document.createElement("div");
        header.id = "add-todo-header";
        header.textContent = "New Task"
        addTodoPopup.appendChild(header);

        const title = document.createElement("input");
        title.id = "add-todo-title";
        title.placeholder = "Add title";
        title.maxlength = "30";
        title.required = true;
        addTodoPopup.appendChild(title);

        const dateLabel = document.createElement("label");
        dateLabel.for = "add-todo-date";
        dateLabel.textContent = "Due date: ";
        addTodoPopup.appendChild(dateLabel);

        const date = document.createElement("input");
        date.type = "date";
        date.id = "add-todo-date";
        addTodoPopup.appendChild(date);

        const description = document.createElement("textarea");
        description.id = "add-todo-description";
        description.placeholder = "Add description";
        description.maxlength = "150";
        description.cols = "50";
        description.rows = "4";
        addTodoPopup.appendChild(description);

        const projectLabel = document.createElement("label");
        projectLabel.for = "add-todo-project";
        projectLabel.textContent = "Add to project: ";
        addTodoPopup.appendChild(projectLabel);

        const project = document.createElement("select");
        project.id = "add-todo-project";

        const project1 = document.createElement("option");
        project1.value = "personal";
        project1.textContent = "Personal";
        project.appendChild(project1);

        const project2 = document.createElement("option");
        project2.value = "work";
        project2.textContent = "Work";
        project.appendChild(project2);

        addTodoPopup.appendChild(project);

        const priorityLabel = document.createElement("label");
        priorityLabel.for = "add-todo-priority";
        priorityLabel.textContent = "Add priority level: ";
        addTodoPopup.appendChild(priorityLabel);

        const priority = document.createElement("select");
        priority.id = "add-todo-priority";

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

        addTodoPopup.appendChild(priority);

        const save = document.createElement("button");
        save.id = "add-todo-save";
        save.textContent = "Save";
        addTodoPopup.appendChild(save);

        // Create transparent overlay behind popup
        const addTodoOverlay = document.createElement("div");
        addTodoOverlay.id = "add-todo-overlay";

        body.appendChild(addTodoPopup);
        body.appendChild(addTodoOverlay);
    }

})();

export default displayController;