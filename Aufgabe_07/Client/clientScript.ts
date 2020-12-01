namespace L07_Hexenkessel { 

    let serverURL: string;

    export async function sendToServer(): Promise <void> {
        //serverURL += "/speichern";

        serverURL = "https://ela-ela.herokuapp.com";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
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

        

       
        let response: Response =  await fetch(serverURL);

        let responseText: string = await response.text();
        console.log(responseText);
        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("hexenkesselForm");
        formular.reset();
        alert(responseText);

    }


    export async function getFromServer(): Promise <void> {

        serverURL = "https://ela-ela.herokuapp.com";
        serverURL += "/get";      

       
        let response: Response =  await fetch(serverURL);

        let responseText: string = await response.text();

        console.log(responseText);
        
        alert(responseText);

    }


}