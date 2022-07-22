let expandButtonFunFacts = document.getElementById("expand-fun-facts");
let funFactsHidden = document.getElementById("fun-facts-hidden");

expandButtonFunFacts.onclick = () => {
    funFactsHidden.style.display = "block";
    expandButtonFunFacts.style.display = "none";
};
