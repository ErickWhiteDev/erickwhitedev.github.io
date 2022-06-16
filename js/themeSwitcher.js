document.addEventListener("DOMContentLoaded", function(event) { // https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/

    // This program enables the embedded theme switcher in the website

    let changeTheme = localStorage.getItem("changeTheme");

    if (changeTheme === null) {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    else {
        document.documentElement.setAttribute("data-theme", changeTheme);
    }

    let themeSwitch = document.getElementById("theme-switch");

    themeSwitch.onclick = function() {

        changeTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"
        document.documentElement.setAttribute("data-theme", changeTheme);
        localStorage.setItem("changeTheme", changeTheme);
    }

});
