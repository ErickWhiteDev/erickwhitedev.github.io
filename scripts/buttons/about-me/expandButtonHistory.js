let expandButtonHistory = document.getElementById("expand-history");

expandButtonHistory.onclick = () => {
    expandButtonHistory.previousElementSibling.style.marginBottom = "0";
    expandButtonHistory.nextElementSibling.style.display = "block";
    expandButtonHistory.style.display = "none";
};
