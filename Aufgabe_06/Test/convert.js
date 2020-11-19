"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
var convert;
(function (convert) {
    console.log("Start");
    let url = "hexenkessel.html";
    let a = "A7";
    //parseInt(a, 16); 
    let b = parseInt(a, 16);
    console.log(b);
    console.log("jetzt");
    console.log(parseInt("A7, 16"));
})(convert || (convert = {}));
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
async function sendOrder(_event) {
    console.log("Sent order");
    let formData = new FormData(form);
    let query = new url_1.URLSearchParams(formData);
    await fetch(URL + "?" + query.toString());
    alert("Order sent!");
}
//# sourceMappingURL=convert.js.map