"use strict";
/* let v = 1;
v = v + 1;
console.log(v); */
let v = 1;
v = v + 1;
console.log(v);
//Konsole
let s = { "zahl": 7, "wahr": true, text: "Hallo" };
// Zum Abfragen --- Klammersyntax s["key"] und der Punktsyntax s.key 
s["zahl"];
7;
s.zahl;
7;
let a = { "wert1": true, "wert2": false };
let vector = { x: 12.4, y: -7.2, meaning: "Ortsvektor" };
// TRACE TABLE
var Cows;
(function (Cows) {
    let nums = [2, 6, 5];
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let result = createCall("m", nums[i]);
        results.push(result);
    }
    console.log(results);
    function createCall(_start, _length) {
        for (let k = _length; k > 0; k--) {
            if (k == 1 || k == _length / 2)
                _start += "h";
            _start += "u";
        }
        return _start;
    }
})(Cows || (Cows = {}));
//# sourceMappingURL=Aufgabe_01.js.map