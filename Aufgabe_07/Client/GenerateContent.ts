namespace L06_Hexenkessel {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export function generateContent(_data: Data): void {
        //console.log(_data);
        generateAdd(_data);
        generateKindOfPotion(_data);
        
    }

    

    function generateKindOfPotion(_data: Data): void {

        for (let category in _data) { //geht alle einzelnen Kategorien durch
            let items: Item[] = _data[category]; //speichert die aktuelle kategorie mit inhalt in items

            if (category == "kindOfPotion") 
                createSelectAuswahl(items);
    
        }
    
        /* let select1: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
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
        select1.appendChild(option6);  */ 
    }

    function createSelectAuswahl(_items: Item[]): HTMLSelectElement {

        let select1: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
        select1.setAttribute("id", "kindOfPotion");
        document.getElementById("fieldsetForselect1")?.appendChild(select1);

        for (let item of _items) {
            let option: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
            option.value = item.name;
            option.innerHTML = item.name;
            //if (item.name == "Choose wanted effect:") 
            //wenn, dann soll disabled selected hinzugefügt werden, damit es nicht ausgewählt werden kann
            select1.appendChild(option);
        }


        return select1;
    }


    

    


    function generateAdd(_data: Data): void {


        for (let category in _data) {
            let items: Item[] = _data[category];

            if (category == "ingredients")
            createSelectIngredients(items);
    
        }


        /* let select2: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
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
        select2.appendChild(optionAdd6); */

    }


    function createSelectIngredients(_items: Item[]): HTMLSelectElement {

        let select2: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
        select2.setAttribute("id", "add"); //damit selectelement über die id gewfunden wirden kann in hexenkessel.ts und ein event listeener hinzugefügt werden kann
        document.getElementById("divForselect2")?.appendChild(select2);

        
        for (let item of _items) {
            let option: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
            option.value = item.name;
            option.innerHTML = item.name + " : " +  item.price.toFixed(2);
            option.setAttribute("price", item.price.toFixed(2));
            select2.appendChild(option);
        }


        return select2;
    }



    /* let input1: HTMLInputElement = <HTMLInputElement>document.createElement("input");
    input1.setAttribute("type", "checkbox");
    document.getElementById("lel")?.appendChild(input1); */
}
