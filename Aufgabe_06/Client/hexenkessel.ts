//import { URLSearchParams } from "url";

 //Input Elemente aus HTML in TS Variablen speichern
namespace L06_Hexenkessel {
    
    console.log("Hallo");

    //import { stderr } from "process";

    let data: Data;
    window.addEventListener("load", handleLoad);
    
   

    
    let name: HTMLInputElement;
    let description: HTMLInputElement;
    let kindOfPotion: HTMLSelectElement;
    let duration: HTMLInputElement;
    let add: HTMLSelectElement;
    let amount: HTMLInputElement;
    let heat: HTMLInputElement;
    let cool: HTMLInputElement;
    let stir: HTMLInputElement;
    let liquid: HTMLInputElement;
    let pasty: HTMLInputElement;
    let solid: HTMLInputElement;
    let color: HTMLInputElement;
    //let recipe: HTMLDivElement = <HTMLDivElement> document.querySelector ("#recipe");
    let buttonAddToRecipe: HTMLButtonElement;
    let buttonAbschicken: HTMLButtonElement;
    let buttonClearRecipe: HTMLButtonElement;

   
 //Event listener hinzufügen an alle input elemente
    async function handleLoad(_event: Event): Promise<void> {
        console.log("handleLoad");

        let response: Response = await fetch("data.json");
        let offer: string = await response.text();
        console.log(offer);
        data = JSON.parse(offer);

        generateContent(data);

        name = <HTMLInputElement> document.querySelector ("#name");
        description = <HTMLInputElement> document.querySelector ("#description");
        kindOfPotion = <HTMLSelectElement> document.querySelector ("#kindOfPotion");
        duration = <HTMLInputElement> document.querySelector ("#duration");
        add = <HTMLSelectElement> document.querySelector ("#add");
        amount = <HTMLInputElement> document.querySelector ("#amount");
        heat = <HTMLInputElement> document.querySelector ("#heat");
        cool = <HTMLInputElement> document.querySelector ("#cool");
        stir = <HTMLInputElement> document.querySelector ("#stir");
        liquid = <HTMLInputElement> document.querySelector ("#liquid");
        pasty = <HTMLInputElement> document.querySelector ("#pasty");
        solid = <HTMLInputElement> document.querySelector ("#solid");
        color = <HTMLInputElement> document.querySelector ("#color");
    //let recipe: HTMLDivElement = <HTMLDivElement> document.querySelector ("#recipe");
        buttonAddToRecipe = <HTMLButtonElement> document.querySelector ("#addToRecipe");
        buttonAbschicken = <HTMLButtonElement> document.querySelector ("#buttonSent");
        buttonClearRecipe = <HTMLButtonElement> document.querySelector ("#buttonClear");
        

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
        buttonAbschicken.addEventListener("click", sendToServer); //ACHTUNG!!! Gibt jetzt 2 Buttons; beim 1. möchte ich Wert speichern und zum Server schicken
        
        buttonClearRecipe.addEventListener("click", deleteContent);
    }

    
  //Funktinen zum auslesen bei veränderung erstellen
   
    let divname: HTMLDivElement = <HTMLDivElement>document.querySelector("#divname");
    function displayName (): void {
        console.log(name.value);
        divname.innerHTML = "" + name.value;
        /* let namepot: string = name.value;
        namepot.innerHTML = "" + name;  */
    }
    let divdescription: HTMLDivElement = <HTMLDivElement>document.querySelector("#divdescription");
    function displayDescription (): void {
        console.log(description.value);
        divdescription.innerHTML = "" + description.value;
    }
    let divkindOfPotion: HTMLDivElement = <HTMLDivElement>document.querySelector("#divkindOfPotion");
    function displayKindOfPotion (): void {
        console.log(kindOfPotion.value);
        divkindOfPotion.innerHTML = "" + kindOfPotion.value;
    }
    let divduration: HTMLDivElement = <HTMLDivElement>document.querySelector("#divduration");
    function displayDuration (): void {
        console.log(duration.value);
        divduration.innerHTML = "" + duration.value;
    }
    

    function calculateTotal(): void {
        //for (/* wie jetzt auf value von Add zugreifen? */) {} ;
        console.log("calculate...");
    }

    let divAdd: HTMLDivElement = <HTMLDivElement>document.querySelector("#divadd");
    function displayAdd (): void {
        console.log(add.value);
        //divAdd.innerHTML += "" + add.value + "- " + amount.value + " gramm";

        let ingredientsDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        ingredientsDiv.innerHTML = "" + add.value + "- " + amount.value + " gramm";
        let buttonDelete: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        buttonDelete.addEventListener("click", deleteIngredients);
        ingredientsDiv.appendChild(buttonDelete);
        divAdd.appendChild(ingredientsDiv);
        //calculateTotal;
    }

    function deleteIngredients(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>_event.currentTarget;
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
    let divheat: HTMLDivElement = <HTMLDivElement>document.querySelector("#divheat");
    function displayHeat (): void {
        console.log(heat.value);
        divheat.innerHTML = "" + heat.value;
    }
    let divcool: HTMLDivElement = <HTMLDivElement>document.querySelector("#divcool");
    function displayCool (): void {
        console.log(cool.value);
        divcool.innerHTML = "" + cool.value;
    } 
    let divstir: HTMLDivElement = <HTMLDivElement>document.querySelector("#divstir");
    function displayStir (): void {
        console.log(stir.value);
        divstir.innerHTML = "" + stir.value;
    }
    //let divliquid: HTMLDivElement = <HTMLDivElement>document.querySelector("#divliquid");
    function displayLiquid (): void {
        displayConsistency(liquid);
    }
    //let divpasty: HTMLDivElement = <HTMLDivElement>document.querySelector("#divpasty");
    function displayPasty(): void {
        displayConsistency(pasty);
    }
    //let divsolid: HTMLDivElement = <HTMLDivElement>document.querySelector("#divsolid");
    function displaySolid(): void {
        displayConsistency(solid);
    }
    let consistency: HTMLDivElement = <HTMLDivElement>document.querySelector("#divconsistency");
    function displayConsistency(_consistency: HTMLInputElement): void {
        console.log(_consistency.value);
        consistency.innerHTML = "" + _consistency.value;
    }
    let divcolor: HTMLDivElement = <HTMLDivElement>document.querySelector("#divcolor");
    function displayColor(): void {
        console.log(color.value);
        divcolor.innerHTML = "" + color.value;
    }  

    //let contentDivOrder:  HTMLDivElement = <HTMLDivElement>document.getElementById("deleteContent");

    function deleteContent(): void {   //Wie kriege ich den Content vom Div in Parameter-Form zum Übergeben/ wie gelöscht, sodass nur Inhalt gelöscht
        console.log("deleteContent");
        divname.innerHTML = "";
        divdescription.innerHTML = "";
        divkindOfPotion.innerHTML =  "";
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


    
}

