/* let v = 1;
v = v + 1;
console.log(v); */

let v: number = 1;
v = v + 1;
console.log(v);



//Konsole
let s = {"zahl": 7, "wahr": true, text: "Hallo"}

// Zum Abfragen --- Klammersyntax s["key"] und der Punktsyntax s.key 

s["zahl"]
7

s.zahl
7



/* Im folgenden Beispiel sind die Schlüssel frei wählbar, sind aber auf den Typ string beschränkt, 
und das Array ist auf Wahrheitswerte homogenisiert. */

interface MapStringToBoolean {
    [key: string]: boolean;
}
let a: MapStringToBoolean = {"wert1": true, "wert2": false};


/* Im nächsten Beispiel sind die Schlüssel vordefiniert und die zugeordneten Werte müssen von bestimmten Typen sein. */

interface VectorWithMeaning {
    x: number;
    y: number;
    meaning: string;
}
let vector: VectorWithMeaning = {x: 12.4, y: -7.2, meaning: "Ortsvektor"};


// TRACE TABLE

namespace Cows {	
    let nums: number[] = [2, 6, 5];
    let results: string[] = [];
    for (let i: number = 0; i < nums.length; i++) {
    let result: string = createCall("m", nums[i]);
    results.push(result);
    }
    console.log(results);
    function createCall(_start: string, _length: number): string {
    for (let k: number = _length; k > 0; k--) {
    if (k == 1 || k == _length / 2)
_   start += "h";
_   start += "u";
    }
    return _start;
}
}
