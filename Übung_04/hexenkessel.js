"use strict";
//import { stderr } from "process";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    let name = document.querySelector("#name");
    let description = document.querySelector("#description");
    let kindOfPotion = document.querySelector("#kindOfPotion");
    let duration = document.querySelector("#duration");
    let add = document.querySelector("#add");
    let amount = document.querySelector("#amount");
    let heat = document.querySelector("#heat");
    let cool = document.querySelector("#cool");
    let stir = document.querySelector("#stir");
    let liquid = document.querySelector("#liquid");
    let pasty = document.querySelector("#pasty");
    let solid = document.querySelector("#solid");
    let color = document.querySelector("#color");
    let recipe = document.querySelector("#recipe");
    //Input Elemente aus HTML in TS Variablen speichern
    function handleLoad() {
        name.addEventListener("input", displayName);
        description.addEventListener("input", displayDescription);
        kindOfPotion.addEventListener("click", displayKindOfPotion);
        duration.addEventListener("change", displayDuration);
        add.addEventListener("click", displayAdd);
        amount.addEventListener("input", displayAmount);
        heat.addEventListener("input", displayHeat);
        cool.addEventListener("input", displayCool);
        stir.addEventListener("change", displayStir);
        liquid.addEventListener("input", displayLiquid);
        pasty.addEventListener("input", displayPasty);
        solid.addEventListener("input", displaySolid);
        color.addEventListener("input", displayColor);
    }
    //Event listerner hinzufügen an alle input elemente
    let divname = document.querySelector("#divname");
    function displayName() {
        console.log(name.value);
        divname.innerHTML = "" + name.value;
        /* let namepot: string = name.value;
        namepot.innerHTML = "" + name;  */
    }
    function displayDescription() {
        console.log(description.value);
    }
    function displayKindOfPotion() {
        console.log(kindOfPotion.value);
    }
    function displayDuration() {
        console.log(duration.value);
    }
    function displayAdd() {
        console.log(add.value);
    }
    function displayAmount() {
        console.log(amount.value);
    }
    function displayHeat() {
        console.log(heat.value);
    }
    function displayCool() {
        console.log(cool.value);
    }
    function displayStir() {
        console.log(stir.value);
    }
    function displayLiquid() {
        console.log(liquid.value);
    }
    function displayPasty() {
        console.log(pasty.value);
    }
    function displaySolid() {
        console.log(solid.value);
    }
    function displayColor() {
        console.log(color.value);
    }
    //Funktinen zum auslesen bei veränderung erstellen
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
//# sourceMappingURL=hexenkessel.js.map