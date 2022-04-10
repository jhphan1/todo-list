import Logo from "./img/logo.png";
import Home from "./img/home1.png";
import Today from "./img/today.png";
import Calendar from "./img/calendar.png";
import Projects from "./img/projects.png";


const loadImages = (() => {
    // Header logo
    const logo = document.querySelector("#logo");

    const myLogo = new Image();
    myLogo.src = Logo;

    logo.appendChild(myLogo);

    // Sidebar icons
    const sidebar = document.querySelectorAll(".menu");

    const myHome = new Image();
    myHome.src = Home;
    myHome.alt = "home";
    sidebar[0].insertBefore(myHome, sidebar[0].firstChild); // allTasks

    const myToday = new Image();
    myToday.src = Today;
    myToday.alt = "today";
    sidebar[1].insertBefore(myToday, sidebar[1].firstChild); // today
    
    const myCalendar = new Image();
    myCalendar.src = Calendar;
    myCalendar.alt = "calendar";
    sidebar[2].insertBefore(myCalendar, sidebar[2].firstChild); // next 7 days

    const myProjects = new Image();
    myProjects.src = Projects;
    myProjects.alt = "projects";
    sidebar[3].insertBefore(myProjects, sidebar[3].firstChild); // projects
})();

export { loadImages };


