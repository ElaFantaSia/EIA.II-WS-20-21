namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);
    let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
 
    function handleLoad(_event: Event): void {
    console.log("Start");
    

    form.addEventListener("change", handleChange);
    }
// function handleLoad(_event: Event): void {  // In der Klammer Parameter vom Typ Event - Funktion wird im Rahmen eines Events aufgerufen
//     console.log("Start");
//     let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
//     let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

//     form.addEventListener("change", handleChange);
//     slider.addEventListener("input", displayAmount);

//function handleChange(_event: Event): void {
  //  let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#recipe");
    //recipe.innerHTML = "";
    //let formData: FormData = new FormData(document.forms[0]);
    //for (let entry of formData) {
    //        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
    //        console.log(entry[2]);
            /* if (item.name == "Add") {
                let price: number = Number(item.getAttribute("price"));
                recipe.innerHTML += item.value + "  € " + price;
            }
            else {
                recipe.innerHTML += item.value;
            } */
            //let price: number = Number(item.getAttribute("price"));
            //console.log(item.name);
            //recipe.innerHTML += item.name + "  € " + price;
    
}


