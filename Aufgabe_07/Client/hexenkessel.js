"use strict";
//import { URLSearchParams } from "url";
//Input Elemente aus HTML in TS Variablen speichern
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    console.log("Hallo");
    //import { stderr } from "process";
    let data;
    window.addEventListener("load", handleLoad);
    let name;
    let description;
    let kindOfPotion;
    let duration;
    let add;
    let amount;
    let heat;
    let cool;
    let stir;
    let liquid;
    let pasty;
    let solid;
    let color;
    //let recipe: HTMLDivElement = <HTMLDivElement> document.querySelector ("#recipe");
    let buttonAddToRecipe;
    let buttonAbschicken;
    let buttonClearRecipe;
    //Event listener hinzufügen an alle input elemente
    async function handleLoad(_event) {
        console.log("handleLoad");
        let response = await fetch("data.json");
        let offer = await response.text();
        console.log(offer);
        data = JSON.parse(offer);
        L07_Hexenkessel.generateContent(data);
        name = document.querySelector("#name");
        description = document.querySelector("#description");
        kindOfPotion = document.querySelector("#kindOfPotion");
        duration = document.querySelector("#duration");
        add = document.querySelector("#add");
        amount = document.querySelector("#amount");
        heat = document.querySelector("#heat");
        cool = document.querySelector("#cool");
        stir = document.querySelector("#stir");
        liquid = document.querySelector("#liquid");
        pasty = document.querySelector("#pasty");
        solid = document.querySelector("#solid");
        color = document.querySelector("#color");
        //let recipe: HTMLDivElement = <HTMLDivElement> document.querySelector ("#recipe");
        buttonAddToRecipe = document.querySelector("#addToRecipe");
        buttonAbschicken = document.querySelector("#buttonSent");
        buttonClearRecipe = document.querySelector("#buttonClear");
        name.addEventListener("input", displayName);
        description.addEventListener("input", displayDescription);
        kindOfPotion.addEventListener("click", displayKindOfPotion);
        duration.addEventListener("change", displayDuration);
        //add.addEventListener("click", displayAdd);
        //amount.addEventListener("input", displayAmount);
        heat.addEventListener("input", displayHeat);
        cool.addEventListener("input", displayCool);
        stir.addEventListener("change", displayStir);
        liquid.addEventListener("input", displayLiquid);
        pasty.addEventListener("input", displayPasty);
        solid.addEventListener("input", displaySolid);
        color.addEventListener("input", displayColor);
        buttonAddToRecipe.addEventListener("click", displayAdd);
        buttonAbschicken.addEventListener("click", hndSendToServer);
        buttonClearRecipe.addEventListener("click", deleteContent);
    }
    //Funktinen zum auslesen bei veränderung erstellen
    let divname = document.querySelector("#divname");
    function displayName() {
        console.log(name.value);
        divname.innerHTML = "" + name.value;
        /* let namepot: string = name.value;
        namepot.innerHTML = "" + name;  */
    }
    let divdescription = document.querySelector("#divdescription");
    function displayDescription() {
        console.log(description.value);
        divdescription.innerHTML = "" + description.value;
    }
    let divkindOfPotion = document.querySelector("#divkindOfPotion");
    function displayKindOfPotion() {
        console.log(kindOfPotion.value);
        divkindOfPotion.innerHTML = "" + kindOfPotion.value;
    }
    let divduration = document.querySelector("#divduration");
    function displayDuration() {
        console.log(duration.value);
        divduration.innerHTML = "" + duration.value;
    }
    function calculateTotal() {
        //for (/* wie jetzt auf value von Add zugreifen? */) {} ;
        console.log("calculate...");
    }
    let ingredientsDiv;
    let divAdd = document.querySelector("#divadd");
    function displayAdd() {
        console.log(add.value);
        //divAdd.innerHTML += "" + add.value + "- " + amount.value + " gramm";
        ingredientsDiv = document.createElement("div");
        ingredientsDiv.innerHTML = "" + add.value + "- " + amount.value + " gramm";
        let buttonDelete = document.createElement("button");
        buttonDelete.addEventListener("click", deleteIngredients);
        ingredientsDiv.appendChild(buttonDelete);
        divAdd.appendChild(ingredientsDiv);
        //calculateTotal;
    }
    function deleteIngredients(_event) {
        let button = _event.currentTarget;
        button.parentElement?.remove();
        console.log("löschen");
    }
    /* let divadd: HTMLDivElement = <HTMLDivElement>document.querySelector("#divadd");
    function displayAdd (): void {
        console.log(add.value);
        divadd.innerHTML = "" + add.value;
    }
    let divamount: HTMLDivElement = <HTMLDivElement>document.querySelector("#divamount");
    function displayAmount (): void {
        console.log(amount.value);
        divamount.innerHTML = "" + amount.value;
    } */
    let divheat = document.querySelector("#divheat");
    function displayHeat() {
        console.log(heat.value);
        divheat.innerHTML = "" + heat.value;
    }
    let divcool = document.querySelector("#divcool");
    function displayCool() {
        console.log(cool.value);
        divcool.innerHTML = "" + cool.value;
    }
    let divstir = document.querySelector("#divstir");
    function displayStir() {
        console.log(stir.value);
        divstir.innerHTML = "" + stir.value;
    }
    //let divliquid: HTMLDivElement = <HTMLDivElement>document.querySelector("#divliquid");
    function displayLiquid() {
        displayConsistency(liquid);
    }
    //let divpasty: HTMLDivElement = <HTMLDivElement>document.querySelector("#divpasty");
    function displayPasty() {
        displayConsistency(pasty);
    }
    //let divsolid: HTMLDivElement = <HTMLDivElement>document.querySelector("#divsolid");
    function displaySolid() {
        displayConsistency(solid);
    }
    let consistency = document.querySelector("#divconsistency");
    function displayConsistency(_consistency) {
        console.log(_consistency.value);
        consistency.innerHTML = "" + _consistency.value;
    }
    let divcolor = document.querySelector("#divcolor");
    function displayColor() {
        console.log(color.value);
        divcolor.innerHTML = "" + color.value;
    }
    function hndSendToServer() {
        /* divname.innerHTML = "";
        divdescription.innerHTML = "";
        divkindOfPotion.innerHTML = "";
        divduration.innerHTML = "";
        //ingredientsDiv.innerHTML = "";
        divheat.innerHTML = "";
        divcool.innerHTML = "";
        divstir.innerHTML = "";
        consistency.innerHTML = "";
        divcolor.innerHTML = ""; */
        L07_Hexenkessel.sendToServer();
    }
    //let contentDivOrder:  HTMLDivElement = <HTMLDivElement>document.getElementById("deleteContent");
    function deleteContent() {
        console.log("deleteContent");
        divname.innerHTML = "";
        divdescription.innerHTML = "";
        divkindOfPotion.innerHTML = "";
        divduration.innerHTML = "";
        divAdd.innerHTML = "";
        divheat.innerHTML = "";
        divcool.innerHTML = "";
        divstir.innerHTML = "";
        consistency.innerHTML = "";
        divcolor.innerHTML = "";
        //delete.deleteContent;
        /* for (let category in contentDivOrder) {
            //if (category == "")
            console.log(category);
        //else if (delete.contentDivOrder);
        } */
    }
})(L07_Hexenkessel || (L07_Hexenkessel = {}));
//# sourceMappingURL=hexenkessel.js.map