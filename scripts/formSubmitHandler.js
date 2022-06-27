let submit = document.getElementById("submit");
let form = document.getElementById("contact-form");
let confirmation = document.getElementById("confirmation");

submit.onclick = () => {
    form.style.display = "none";
    confirmation.style.display = "block";
}
