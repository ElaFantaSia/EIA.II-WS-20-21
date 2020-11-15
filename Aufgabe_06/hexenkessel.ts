//import { URLSearchParams } from "url";

 //Input Elemente aus HTML in TS Variablen speichern
namespace L06_Hexenkessel {
    console.log("Hallo");

    //import { stderr } from "process";

    
    window.addEventListener("load", handleLoad);
    generateContent(data, data2);
   

    

    
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
    //let recipe: HTMLDivElement = <HTMLDivElement> document.querySelector ("#recipe");
    let button: HTMLButtonElement = <HTMLButtonElement> document.querySelector ("#buttonSent");

   
 //Event listener hinzufügen an alle input elemente
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
        button.addEventListener("click", sendToServer);
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
    let divadd: HTMLDivElement = <HTMLDivElement>document.querySelector("#divadd");
    function displayAdd (): void {
        console.log(add.value);
        divadd.innerHTML = "" + add.value;
    }
    let divamount: HTMLDivElement = <HTMLDivElement>document.querySelector("#divamount");
    function displayAmount (): void {
        console.log(amount.value);
        divamount.innerHTML = "" + amount.value;
    }
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


    async function sendToServer(): Promise <void> {
        let serverURL: string = "ServerAdresse";
        serverURL += "/speichern";

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        //serverURL += "&" + divname.innerHTML;
        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("hexenkesselForm");
        formular.reset();
        window.alert("Daten wurden abgeschickt"); 

        await fetch(serverURL);

    }
}

