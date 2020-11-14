"use strict";
//import { URLSearchParams } from "url";
//Input Elemente aus HTML in TS Variablen speichern
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    //import { stderr } from "process";
    window.addEventListener("load", handleLoad);
    L04_Hexenkessel.generateContent(L04_Hexenkessel.data, L04_Hexenkessel.data2);
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
        let serverURL = "ServerAdresse";
        serverURL += "/speichern";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        //serverURL += "&" + divname.innerHTML;
        let formular = document.getElementById("hexenkesselForm");
        formular.reset();
        window.alert("Daten wurden abgeschickt");
        await fetch(serverURL);
    }
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
//# sourceMappingURL=hexenkessel.js.map