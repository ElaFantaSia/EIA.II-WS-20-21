"use strict";
var BlackmailerCompanion;
(function (BlackmailerCompanion) {
    console.log("Start");
    let chosenCharacter = "A"; // = "A"; ----Damit ist ein Default-Buchstabe definiert, falls User ohne Keyboard-Eingabe in den Letter klickt
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail"); // In den Klammern <> um zu sagen "ja, das ist ein HTML-Element"
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeLetter(_event) {
        //console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        // console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
})(BlackmailerCompanion || (BlackmailerCompanion = {}));
// Als Lösung z.B. stopPropagation oder Vergleich target/current target
//# sourceMappingURL=BlackmailerCompanion.js.map