let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("menu");
let main = document.querySelector("main");
let navWidth;
let menuOpened;

function openMenu() {
    menu.style.left = "0px";
    main.style.filter = "blur(10px)";
    menuOpened = true;
}

function closeMenu() {
    menu.style.left = navWidth;
    main.style.filter = "blur(0px)";
    menuOpened = false;
}

function formatWidth(width, mult) {
    return "-" + (mult * width).toString() + "px";
}

function setup() {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 1440) {
        navWidth = formatWidth(windowWidth, 0.2);
    } else if (windowWidth >= 1024) {
        navWidth = formatWidth(windowWidth, 0.3);
    } else if (windowWidth >= 900) {
        navWidth = formatWidth(windowWidth, 0.4);
    } else if (windowWidth >= 768) {
        navWidth = formatWidth(windowWidth, 0.5);
    } else {
        navWidth = formatWidth(windowWidth, 1.0);
    }

    closeMenu();
}

function endResize(func){ // https://stackoverflow.com/questions/45905160/javascript-on-window-resize-end
    let timer;
    return function(event){
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(func,500,event);
    };
}

window.onload = () => {
    setup();
}

window.onresize = () => {
    setup();
    menu.style.display = "none";
}

window.addEventListener("resize", endResize(
    () => {
        menu.style.display = "block";
        }
    )
);

menuButton.onclick = () => {
    if (menuOpened) {
        closeMenu();
    } else {
        openMenu();
    }
};

document.onclick = (click) => {
    if(menuOpened && !menu.contains(click.target) && !menuButton.contains(click.target)) {
        closeMenu();
    }
}
