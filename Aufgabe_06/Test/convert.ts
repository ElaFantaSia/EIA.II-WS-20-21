import { URLSearchParams } from "url";

namespace convert {
    console.log("Start");
    let url: string = "hexenkessel.html";

    let a: string = "A7";
    //parseInt(a, 16); 
    let b: number = parseInt(a , 16);
    console.log(b);
    console.log("jetzt");
    console.log(parseInt("A7, 16"));
}



/* Alt Version */

/* 

namespace convert.ts {
    console.log("Start");

    let a: string = "A7";
    parseInt("A7", 16); 
    
    console.log(parseInt);    <- nur function parseInt aufruft, aber nicht mit den Parametern A7 und 16
    console.log(parseInt("A7, 16"));    <- würde funktionieren???????
}
*/

async function sendOrder(_event: Event): Promise<void> {
    console.log("Sent order");
    let formData: FormData = new FormData(form);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    await fetch(url + "?" + query.toString());
    alert("Order sent!");
}