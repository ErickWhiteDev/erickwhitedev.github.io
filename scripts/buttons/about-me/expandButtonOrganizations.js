let expandButtonOrganizations = document.getElementById("expand-organizations");

expandButtonOrganizations.onclick = () => {
    expandButtonOrganizations.previousElementSibling.style.marginBottom = "0";
    expandButtonOrganizations.nextElementSibling.style.display = "block";
    expandButtonOrganizations.style.display = "none";
};
