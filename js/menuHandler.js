document.addEventListener("DOMContentLoaded", () => {

    let menuButton = document.getElementById("menu-button")
    let menu = document.getElementById("menu");
    let menuClosed = menu.style.display === "none";

    menuButton.onclick = () => {
        if (menuClosed) {
            menu.style.display = "none";
            document.querySelector("main").style.filter = "blur(0px)";
            menuClosed = false;
        } else {
            menu.style.display = "block";
            document.querySelector("main").style.filter = "blur(10px)";
            menuClosed = true;
        }
    }

});
