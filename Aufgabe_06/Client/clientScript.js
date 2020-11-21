"use strict";
var L06_Hexenkessel;
(function (L06_Hexenkessel) {
    let serverURL = "https://ela-ela.herokuapp.com/";
    async function sendToServer() {
        //serverURL += "/speichern";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        //let response: Response = await fetch(URL + "?" + query.toString());
        console.log(URL);
        //let responseText: string = await response.text();
        serverURL += "?" + query.toString();
        console.log(serverURL);
        /* let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(URL + "?" + query.toString());
        let responseText: string = await response.text();
        serverURL += "?" + query.toString(); */
        //serverURL += "&" + divname.innerHTML;
        //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("hexenkesselForm");
        //formular.reset();
        //window.alert(responseText); 
        console.log(await fetch(serverURL));
    }
    L06_Hexenkessel.sendToServer = sendToServer;
})(L06_Hexenkessel || (L06_Hexenkessel = {}));
//# sourceMappingURL=clientScript.js.map