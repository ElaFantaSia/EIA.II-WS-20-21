namespace BlackmailerCompanion {
    console.log("Start");
    let chosenCharacter: string = "A";            // = "A"; ----Damit ist ein Default-Buchstabe definiert, falls User ohne Keyboard-Eingabe in den Letter klickt
    window.addEventListener("load", handleLoad);

    function handleLoad (_event: Event): void{
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");   // In den Klammern <> um zu sagen "ja, das ist ein HTML-Element"
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }

    function placeLetter (_event: MouseEvent): void {
        //console.log(_event);
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let mail: HTMLElement = <HTMLElement>_event.target;
        let letter: HTMLSpanElement = document.createElement("span");
        mail.appendChild(letter);
        
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";

        letter.addEventListener("click", deleteLetter);
    }

    function chooseCharacter (_event: KeyboardEvent): void {
        // console.log(_event);
        chosenCharacter = _event.key;
    }

    function deleteLetter (_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
        parent.removeChild(target);
    }
}

// Als Lösung z.B. stopPropagation oder Vergleich target/current target
