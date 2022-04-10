import Logo from "./img/logo.png";
import Home from "./img/home1.png";
// import Today from ".img/today.png";
// import Calendar from ".img/calendar.png";
// import Projects from ".img/projects.png";


const loadImages = (() => {
    // Simplify insertion into DOM tree
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    // Header logo
    const logo = document.querySelector("#logo");

    const myLogo = new Image();
    myLogo.src = Logo;

    insertAfter(myLogo, logo);
        // All tasks
    
})();

export { loadImages };


