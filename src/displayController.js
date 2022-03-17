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

})();

export default displayController;