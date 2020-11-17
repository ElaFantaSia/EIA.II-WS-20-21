"use strict";
var convert;
(function (convert) {
    console.log("Start");
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
//# sourceMappingURL=convert.js.map