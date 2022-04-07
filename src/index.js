import './style.css';
import events from "./pubsub";
import { renderAllTasks, renderProjectList } from './displayController';
import { editTodoPopup } from './popups';
import { format, parseISO } from 'date-fns';


const app = (() => {
    let todos = [];
    let projects = [];

    // Get todos and projects arrays from local storage API if available
    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
        events.emit("todos changed", todos);
    }

    if (localStorage.getItem("projects")) {
        projects = JSON.parse(localStorage.getItem("projects"));
        events.emit("Projects changed", projects);
    }

    // todo factory function
    function todoFactory(title, description, dueDate, project, priority) {
        let completed = false;
        return { title, description, dueDate, project, priority, completed };
    }

    // Pre-fill todos array
    // const todo1 = todoFactory("Haircut at 9", "Haircut at 9 at Great Clips with Aaron as your barber", "04/12/22", "General", "medium");
    // const todo2 = todoFactory("Shop for paint", "Go to Sherwin Williams next to barber and pick out sample colors for guest bedroom", "04/06/22", "General", "normal");
    // const todo3 = todoFactory("Send work schedule", "Email Bob my work schedule for next month", "04/30/22", "Work", "high");
    // todos.push(todo1, todo2, todo3);

    // events.emit("todos changed", todos);

    // Pre-fill projects array with default project
    projects[0] = "General";

    events.emit("Projects changed", projects);

    // Subscribe to user input events
    events.on("todos changed", storeTodos);
    events.on("Projects changed", storeProjects);
    events.on("User inputs new todo", addTodo);
    events.on("User inputs new project", addProject);
    events.on("User edits todo", editTodo);
    events.on("User deletes todo", deleteTodo);
    events.on("User completes todo", completeTodo);
    events.on("User un-completes todo", uncompleteTodo);
    events.on("User deletes project", deleteProject);

    // Store changes to todos on local computer with localStorage API
    function storeTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // Store changes to projects on local computer with localStorage API
    function storeProjects(projects) {
        localStorage.setItem("projects", JSON.stringify(projects));
    }

    function addTodo(userInput) {
        let title;
        let description;
        let date;
        let project;
        let priority;

        // Error check user input from addTodoPopup
        if (!userInput[0]) {
            return alert("Please add title.");
        } else if (todos.find(todo => todo.title === userInput[0])) {
            return alert("That title already exists.");
        } else if (userInput[0].length > 60) {
            return alert("Title cannot exceed 60 characters.");
        } else {
            title = userInput[0];
        }

        if (userInput[1].length > 200) {
            return alert("Description cannot exceed 200 characters.");
        } else {
            description = userInput[1];
        }

        if (!userInput[2]) {
            return alert("Please add due date.");
        } else {
            // Format due date
            date = format(parseISO(userInput[2]), 'MM/dd/yy');
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
        app.todos.push(aTodo);
        events.emit("todos changed", app.todos);
    }

    function addProject(userInput) {
        if (!userInput) {
            return alert("Please add title.");
        } else if (app.projects.find(project => project === userInput)) {
            return alert("That title already exists.");
        } else if (userInput.length > 20) {
            return alert("Project title cannot exceed 12 characters.");
        } else {
            app.projects.push(userInput);
            events.emit("Projects changed", app.projects);
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
        if (!userInput[0]) {
            return alert("Please add title.");
        // Checks if title already exists and is also not the todo being edited
        } else if (todos.find(todo => todo.title === userInput[0]) && userInput[0] !== targetTodo) {
            return alert("That title already exists.");
        } else if (userInput[0].length > 60) {
            return alert("Title cannot exceed 60 characters.");
        } else {
            title = userInput[0];
        }

        if (userInput[1].length > 200) {
            return alert("Description cannot exceed 200 characters.");
        } else {
            description = userInput[1];
        }

        if (!userInput[2]) {
            return alert("Please add due date.");
        } else {
            // Format due date
            date = format(parseISO(userInput[2]), 'MM/dd/yy');
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
        app.todos.forEach(todo => {
            if (todo.title === targetTodo) {
                todo.title = title;
                todo.description = description;
                todo.dueDate = date;
                todo.project = project;
                todo.priority = priority;
            }
        })
    
        events.emit("todos changed", app.todos);
    }

    function deleteTodo(targetObject) {
        app.todos = app.todos.filter(todo => todo.title !== targetObject);

        events.emit("todos changed", app.todos);
    }

    function completeTodo(targetObject) {
        app.todos.forEach(todo => {
            if (todo.title === targetObject) {
                todo.completed = true;
            }
        });

        events.emit("todos changed", app.todos);
    }

    function uncompleteTodo(targetObject) {
        app.todos.forEach(todo => {
            if (todo.title === targetObject) {
                todo.completed = false;
            }
        });

        events.emit("todos changed", app.todos);
    }

    function deleteProject(targetProject) {
        // Delete all todos in project
        app.todos = app.todos.filter(todo => todo.project !== targetProject);

        // Delete project
        app.projects = app.projects.filter(project => project !== targetProject);
        // app.projects.splice(app.projects.indexOf(targetProject), 1);
        
        events.emit("Projects changed", app.projects);
        events.emit("todos changed", app.todos);
    }

    return { todos, projects };
})();


export default app;