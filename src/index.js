import './style.css';
import events from "./pubsub";
import { renderAllTasks, renderProjectList } from './displayController';
import { editTodoPopup } from './popups';


const app = (() => {
    let todos = [];
    let projects = [];

    // todo factory function
    function todoFactory(title, description, dueDate, project, priority) {
        return { title, description, dueDate, project, priority };
    }

    // Pre-fill todos array
    const todo1 = todoFactory("Haircut at 9", "Haircut at 9 at Great Clips with Aaron as your barber", "2022-03-15", "Personal", "medium");
    const todo2 = todoFactory("Shop for paint", "Go to Sherwin Williams next to barber and pick out sample colors for guest bedroom", "2022-03-15", "Personal", "normal");
    const todo3 = todoFactory("Send work schedule", "Email Bob my work schedule for next month", "2022-03-15", "Work", "high");
    todos.push(todo1, todo2, todo3);

    events.emit("todos changed", todos);

    // Pre-fill projects array
    projects[0] = "Personal";

    events.emit("Projects changed", projects);

    // Subscribe to user input events
    events.on("User inputs new todo", addTodo);
    events.on("User inputs new project", addProject);
    events.on("User edits todo", editTodo);
    events.on("User deletes todo", deleteTodo);

    function addTodo(userInput) {
        let title;
        let description;
        let date;
        let project;
        let priority;

        // Error check user input from addTodoPopup
        // $$TODO: Check if title already exists
        if (!userInput[0]) {
            return alert("Please add title.");
        } else {
            title = userInput[0];
        }

        description = userInput[1];

        if (!userInput[2]) {
            return alert("Please add due date.");
        } else {
            date = userInput[2];
        }

        if (!userInput[3]) {
            return alert("Please assign to a project.");
        } else {
            project = userInput[3];
        }

        if (!userInput[4]) {
            return alert("Please select a priority level.");
        } else {
            priority = userInput[4];
        }

        // Create new todo object and add to array
        const aTodo = todoFactory(title, description, date, project, priority);
        todos.push(aTodo);
        events.emit("todos changed", todos);
    }

    function addProject(userInput) {
        if (!userInput) {
            return alert("Please add title.");
            // $$ TODO: More error checking
                // Does title already exist?
                // Character limits
        } else {
            projects.push(userInput);
            events.emit("Projects changed", projects);
        }
    }

    function editTodo(userInput) {
        let targetTodo = userInput[5];
        let title;
        let description;
        let date;
        let project;
        let priority;

        // Error check user input from addTodoPopup
        // $$TODO: Check if title already exists
        if (!userInput[0]) {
            return alert("Please add title.");
        } else {
            title = userInput[0];
        }

        description = userInput[1];

        if (!userInput[2]) {
            return alert("Please add due date.");
        } else {
            date = userInput[2];
        }

        if (!userInput[3]) {
            return alert("Please assign to a project.");
        } else {
            project = userInput[3];
        }

        if (!userInput[4]) {
            return alert("Please select a priority level.");
        } else {
            priority = userInput[4];
        }

        // Edit todo object
        todos.forEach(todo => {
            if (todo.title === targetTodo) {
                todo.title = title;
                todo.description = description;
                todo.dueDate = date;
                todo.project = project;
                todo.priority = priority;
            }
        })
    
        events.emit("todos changed", todos);
    }

    function deleteTodo(targetObject) {
        todos = todos.filter(todo => todo.title !== targetObject);

        events.emit("todos changed", todos);
    }

    return { todos, projects };
})();

export default app;