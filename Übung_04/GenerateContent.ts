namespace L04_Hexenkessel {
    export function generateContent(_data: Data): void {
        console.log(_data);

        generateKindOfPotion();
        generateAdd();
    }

    function generateKindOfPotion(): void {
        let select1: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
        select1.setAttribute("id", "kindOfPotion");
        document.getElementById("fieldsetForselect1")?.appendChild(select1);

        let option1: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        option1.innerHTML = "choose wanted effects";
        select1.appendChild(option1);   
        
        let option2: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        option2.innerHTML = "Love potion";
        select1.appendChild(option2);   

        let option3: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        option3.innerHTML = "Forever young potion";
        select1.appendChild(option3); 
        
        let option4: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        option4.innerHTML = "Healing potion";
        select1.appendChild(option4);  

        let option5: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        option5.innerHTML = "Concentration potion";
        select1.appendChild(option5);  

        let option6: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        option6.innerHTML = "Poisoning potion";
        select1.appendChild(option6);  
    }

    function generateAdd(): void {
        let select2: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
        select2.setAttribute("id", "add");
        document.getElementById("divForselect2")?.appendChild(select2);

        let optionAdd1: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        optionAdd1.innerHTML = "Add";
        select2.appendChild(optionAdd1);

        let optionAdd2: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        optionAdd2.innerHTML = "Firefly";
        select2.appendChild(optionAdd2);

        let optionAdd3: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        optionAdd3.innerHTML = "Earwigs";
        select2.appendChild(optionAdd3);

        let optionAdd4: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        optionAdd4.innerHTML = "Lizard";
        select2.appendChild(optionAdd4);

        let optionAdd5: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        optionAdd5.innerHTML = "Fairy";
        select2.appendChild(optionAdd5);

        let optionAdd6: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        optionAdd6.innerHTML = "Nosehair";
        select2.appendChild(optionAdd6);

    }


    /* let input1: HTMLInputElement = <HTMLInputElement>document.createElement("input");
    input1.setAttribute("type", "checkbox");
    document.getElementById("lel")?.appendChild(input1); */
}
