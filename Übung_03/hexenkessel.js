"use strict";
var L03_Hexenkessel;
(function (L03_Hexenkessel) {
    window.addEventListener("load", handleLoad);
})(L03_Hexenkessel || (L03_Hexenkessel = {}));
function handleLoad(_event) {
    console.log("Start");
    let form = document.querySelector("div#form");
    form.addEventListener("change", handleChange);
}
// function handleLoad(_event: Event): void {  // In der Klammer Parameter vom Typ Event - Funktion wird im Rahmen eines Events aufgerufen
//     console.log("Start");
//     let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
//     let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
//     form.addEventListener("change", handleChange);
//     slider.addEventListener("input", displayAmount);
function handleChange(_event) {
    let recipe = document.querySelector("div#recipe");
    recipe.innerHTML = "";
    let formData = new FormData(document.forms[0]);
    for (let entry of formData) {
        let item = document.querySelector("[value='" + entry[1] + "']");
        let price = Number(item.getAttribute("price"));
        recipe.innerHTML += item.name + "  € " + price;
    }
}
//# sourceMappingURL=hexenkessel.js.map