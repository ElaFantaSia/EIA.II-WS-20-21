"use strict";
var ÜbungAsync;
(function (ÜbungAsync) {
    async function communicate(_url) {
        console.log("vor fetch");
        let response = await fetch(_url);
        console.log("nach fetch");
        //await response.text();
        let ergebnis = await response.text();
        console.log(ergebnis);
    }
    console.log("start");
    communicate("https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt");
    console.log("end");
})(ÜbungAsync || (ÜbungAsync = {}));
//function communicate(_url: jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt): void
//# sourceMappingURL=ÜbungAsync.js.map