//import { stderr } from "process";

namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);
    
    let name: HTMLInputElement = <HTMLInputElement> document.querySelector ("#name");
    let description: HTMLInputElement = <HTMLInputElement> document.querySelector ("#description");
    let kindOfPotion: HTMLSelectElement = <HTMLSelectElement> document.querySelector ("#kindOfPotion");
    let duration: HTMLInputElement = <HTMLInputElement> document.querySelector ("#duration");
    let add: HTMLSelectElement = <HTMLSelectElement> document.querySelector ("#add");
    let amount: HTMLInputElement = <HTMLInputElement> document.querySelector ("#amount");
    let heat: HTMLInputElement = <HTMLInputElement> document.querySelector ("#heat");
    let cool: HTMLInputElement = <HTMLInputElement> document.querySelector ("#cool");
    let stir: HTMLInputElement = <HTMLInputElement> document.querySelector ("#stir");
    let liquid: HTMLInputElement = <HTMLInputElement> document.querySelector ("#liquid");
    let pasty: HTMLInputElement = <HTMLInputElement> document.querySelector ("#pasty");
    let solid: HTMLInputElement = <HTMLInputElement> document.querySelector ("#solid");
    let color: HTMLInputElement = <HTMLInputElement> document.querySelector ("#color");
    let recipe: HTMLDivElement = <HTMLDivElement> document.querySelector ("#recipe");

    //Input Elemente aus HTML in TS Variablen speichern

    function handleLoad(): void {
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
    let divname: HTMLDivElement = <HTMLDivElement>document.querySelector("#divname");
    function displayName (): void {
        console.log(name.value);
        divname.innerHTML = "" + name.value;
        /* let namepot: string = name.value;
        namepot.innerHTML = "" + name;  */
    }
    function displayDescription (): void {
        console.log(description.value);
    }
    function displayKindOfPotion (): void {
        console.log(kindOfPotion.value);
    }
    function displayDuration (): void {
        console.log(duration.value);
    }
    function displayAdd (): void {
        console.log(add.value);
    }
    function displayAmount (): void {
        console.log(amount.value);
    }
    function displayHeat (): void {
        console.log(heat.value);
    }
    function displayCool (): void {
        console.log(cool.value);
    }
    function displayStir (): void {
        console.log(stir.value);
    }
    function displayLiquid (): void {
        console.log(liquid.value);
    }
    function displayPasty (): void {
        console.log(pasty.value);
    }
    function displaySolid (): void {
        console.log(solid.value);
    }
    function displayColor (): void {
        console.log(color.value);
    }
    //Funktinen zum auslesen bei veränderung erstellen

   
    
}


