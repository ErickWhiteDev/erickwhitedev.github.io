let expandButtonProjects = document.getElementById("expand-projects");

expandButtonProjects.onclick = () => {
    expandButtonProjects.previousElementSibling.style.marginBottom = "0";
    expandButtonProjects.nextElementSibling.style.display = "block";
    expandButtonProjects.style.display = "none";
};
