"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    function generateContent(_data) {
        console.log(_data);
        generateKindOfPotion();
        generateAdd();
    }
    L04_Hexenkessel.generateContent = generateContent;
    function generateKindOfPotion() {
        let select1 = document.createElement("select");
        select1.setAttribute("id", "kindOfPotion");
        document.getElementById("fieldsetForselect1")?.appendChild(select1);
        let option1 = document.createElement("option");
        option1.innerHTML = "choose wanted effects";
        select1.appendChild(option1);
        let option2 = document.createElement("option");
        option2.innerHTML = "Love potion";
        select1.appendChild(option2);
        let option3 = document.createElement("option");
        option3.innerHTML = "Forever young potion";
        select1.appendChild(option3);
        let option4 = document.createElement("option");
        option4.innerHTML = "Healing potion";
        select1.appendChild(option4);
        let option5 = document.createElement("option");
        option5.innerHTML = "Concentration potion";
        select1.appendChild(option5);
        let option6 = document.createElement("option");
        option6.innerHTML = "Poisoning potion";
        select1.appendChild(option6);
    }
    function generateAdd() {
        let select2 = document.createElement("select");
        select2.setAttribute("id", "add");
        document.getElementById("divForselect2")?.appendChild(select2);
        let optionAdd1 = document.createElement("option");
        optionAdd1.innerHTML = "Add";
        select2.appendChild(optionAdd1);
        let optionAdd2 = document.createElement("option");
        optionAdd2.innerHTML = "Firefly";
        select2.appendChild(optionAdd2);
        let optionAdd3 = document.createElement("option");
        optionAdd3.innerHTML = "Earwigs";
        select2.appendChild(optionAdd3);
        let optionAdd4 = document.createElement("option");
        optionAdd4.innerHTML = "Lizard";
        select2.appendChild(optionAdd4);
        let optionAdd5 = document.createElement("option");
        optionAdd5.innerHTML = "Fairy";
        select2.appendChild(optionAdd5);
        let optionAdd6 = document.createElement("option");
        optionAdd6.innerHTML = "Nosehair";
        select2.appendChild(optionAdd6);
    }
    /* let input1: HTMLInputElement = <HTMLInputElement>document.createElement("input");
    input1.setAttribute("type", "checkbox");
    document.getElementById("lel")?.appendChild(input1); */
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
//# sourceMappingURL=GenerateContent.js.map