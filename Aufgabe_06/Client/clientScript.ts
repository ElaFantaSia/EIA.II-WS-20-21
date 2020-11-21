namespace L06_Hexenkessel { 

    let serverURL: string = "https://ela-ela.herokuapp.com/";

    export async function sendToServer(): Promise <void> {
        
        //serverURL += "/speichern";

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
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
}