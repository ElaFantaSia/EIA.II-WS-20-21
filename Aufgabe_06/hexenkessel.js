"use strict";
//import { URLSearchParams } from "url";
//Input Elemente aus HTML in TS Variablen speichern
var L06_Hexenkessel;
(function (L06_Hexenkessel) {
    console.log("Hallo");
    //import { stderr } from "process";
    window.addEventListener("load", handleLoad);
    L06_Hexenkessel.generateContent(L06_Hexenkessel.data, L06_Hexenkessel.data2);
    let serverURL = "ServerAdresse";
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
    //let recipe: HTMLDivElement = <HTMLDivElement> document.querySelector ("#recipe");
    let button = document.querySelector("#buttonSent");
    //Event listener hinzufügen an alle input elemente
    async function handleLoad(_event) {
        console.log("handleLoad");
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
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
        button.addEventListener("click", sendToServer);
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
    let divadd = document.querySelector("#divadd");
    function displayAdd() {
        console.log(add.value);
        divadd.innerHTML = "" + add.value;
    }
    let divamount = document.querySelector("#divamount");
    function displayAmount() {
        console.log(amount.value);
        divamount.innerHTML = "" + amount.value;
    }
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
    async function sendToServer() {
        serverURL += "/speichern";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let response = await fetch(URL + "?" + query.toString());
        let responseText = await response.text();
        serverURL += "?" + query.toString();
        //serverURL += "&" + divname.innerHTML;
        let formular = document.getElementById("hexenkesselForm");
        formular.reset();
        window.alert(responseText);
        await fetch(serverURL);
    }
})(L06_Hexenkessel || (L06_Hexenkessel = {}));
//# sourceMappingURL=hexenkessel.js.map