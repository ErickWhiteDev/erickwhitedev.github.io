let expandButtonHobbies = document.getElementById("expand-hobbies");

expandButtonHobbies.onclick = () => {
    expandButtonHobbies.previousElementSibling.style.marginBottom = "0";
    expandButtonHobbies.nextElementSibling.style.display = "block";
    expandButtonHobbies.style.display = "none";
};
