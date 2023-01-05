let expandSolidLiquidHybrid = document.getElementById("expand-solid-liquid-hybrid");
let solidLiquidHybridHidden = document.getElementsByClassName("solid-liquid-hybrid-hidden");

expandSolidLiquidHybrid.onclick = () => {
    for (let i of solidLiquidHybridHidden) {
        i.style.display = "list-item";
    }
    expandSolidLiquidHybrid.style.display = "none";
};
