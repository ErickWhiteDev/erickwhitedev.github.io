let expandButtonFunFacts = document.getElementById("expand-fun-facts");
let funFactsHidden = document.getElementsByClassName("fun-facts-hidden");

expandButtonFunFacts.onclick = () => {
    for (let i of funFactsHidden) {
        i.style.display = "list-item";
    }
    expandButtonFunFacts.style.display = "none";
};
