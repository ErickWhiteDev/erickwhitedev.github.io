// https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/
// This script enables the embedded theme switcher in the website

let changeTheme = localStorage.getItem("changeTheme");

document.documentElement.setAttribute("data-theme", changeTheme === null ? "dark" : changeTheme);

let themeSwitch = document.getElementById("theme-switch");

themeSwitch.onclick = () => {
    changeTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", changeTheme);
    localStorage.setItem("changeTheme", changeTheme);
};
