let pageMenu = `
    <button id="menu-button" aria-label="Menu Button">
        <svg>
            <use href="assets/svg/menu.svg#menu"/>
        </svg>
    </button>
    <button id="theme-switch" aria-label="Theme Switch">
        <svg>
            <use href="assets/svg/theme.svg#theme"/>
        </svg>
    </button>
    <nav id="menu">
        <div class="spacer"></div>
        <ul>
            <li class="nav-item"><a href="index.html">Home</a></li>
            <li class="nav-item"><a href="about-me.html">About Me</a></li>
            <li class="nav-item"><a href="philosophy-of-education.html">Philosophy of Education</a></li>
            <li class="nav-item dropdown"><a>What I Do ▼</a></li>
            <ul class="nav-dropdown">
                <li class="nav-item-dropdown"><a href="projects.html">Projects</a></li>
                <li class="nav-item-dropdown"><a href="relevant-courses.html">Relevant Courses</a></li>
                <li class="nav-item-dropdown"><a href="work-and-experience.html">Work and Experience</a></li>
            </ul>
            <li class="nav-item resume"><a href="resume.html">Résumé</a></li>
        </ul>
    </nav>
`;

// TODO: Fill out these pages and add them to the nav dropdown submenu
/*
                <li class="nav-item-dropdown"><a href="creative-work.html">Creative Work</a></li>
                <li class="nav-item-dropdown"><a href="writing.html">Writing</a></li>
 */

document.getElementById("page-menu").innerHTML = pageMenu;
