namespace L03_Hexenkessel {
    window.addEventListener("load", handleLoad);
}

function handleLoad(_event: Event): void {
    console.log("Start");
    let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");

    form.addEventListener("change", handleChange);
}
// function handleLoad(_event: Event): void {  // In der Klammer Parameter vom Typ Event - Funktion wird im Rahmen eines Events aufgerufen
//     console.log("Start");
//     let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
//     let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

//     form.addEventListener("change", handleChange);
//     slider.addEventListener("input", displayAmount);

function handleChange(_event: Event): void {
    let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#recipe");
    recipe.innerHTML = "";
    let formData: FormData = new FormData(document.forms[0]);
    for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));

            recipe.innerHTML += item.name + "  € " + price;
    }
}


