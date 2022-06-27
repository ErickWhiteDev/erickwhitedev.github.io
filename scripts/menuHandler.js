let menuButton = document.getElementById("menu-button")
let menu = document.getElementById("menu");
let main = document.querySelector("main");
let menuClosed = menu.style.display === "none";

menuButton.onclick = () => {
    if (menuClosed) {
        menu.style.display = "none";
        main.style.filter = "blur(0px)";
        menuClosed = false;
    } else {
        menu.style.display = "block";
        main.style.filter = "blur(10px)";
        menuClosed = true;
    }
};
