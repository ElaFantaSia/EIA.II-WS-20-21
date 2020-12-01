"use strict";
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    let serverURL;
    async function sendToServer() {
        //serverURL += "/speichern";
        serverURL = "https://ela-ela.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        //let response: Response = await fetch(URL + "?" + query.toString());
        //console.log(URL);
        //let responseText: string = await response.text();
        serverURL += "/save";
        serverURL += "?" + query.toString();
        //console.log(serverURL);
        /* let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(URL + "?" + query.toString());
        let responseText: string = await response.text();
        serverURL += "?" + query.toString(); */
        //serverURL += "&" + divname.innerHTML;
        //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("hexenkesselForm");
        //formular.reset();
        //window.alert(responseText); 
        console.log("Sending...");
        let response = await fetch(serverURL);
        let responseText = await response.text();
        console.log(responseText);
        let formular = document.getElementById("hexenkesselForm");
        formular.reset();
        alert(responseText);
    }
    L07_Hexenkessel.sendToServer = sendToServer;
    async function getFromServer() {
        serverURL = "https://ela-ela.herokuapp.com";
        serverURL += "/get";
        console.log("Get...");
        let response = await fetch(serverURL);
        let responseText = await response.text();
        console.log(responseText);
        alert(responseText);
    }
    L07_Hexenkessel.getFromServer = getFromServer;
})(L07_Hexenkessel || (L07_Hexenkessel = {}));
//# sourceMappingURL=clientScript.js.map