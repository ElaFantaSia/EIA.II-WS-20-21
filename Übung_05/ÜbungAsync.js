"use strict";
var ÜbungAsync;
(function (ÜbungAsync) {
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
    }
})(ÜbungAsync || (ÜbungAsync = {}));
//function communicate(_url: jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt): void
function communicate() {
}
//# sourceMappingURL=ÜbungAsync.js.map