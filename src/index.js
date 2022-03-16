import './style.css';
import events from "./pubsub";
import displayController from './displayController';

// todo factory function
function todoFactory(title, description, dueDate, priority) {
    return { title, description, dueDate, priority };
}