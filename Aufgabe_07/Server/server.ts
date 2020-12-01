import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace L07_Hexenkessel {
    interface Order {
        [type: string]: string | string[] | undefined;
    }

    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    //let databaseURL: string =  "mongodb://localhost:27017";
    let databaseURL: string =  "mongodb+srv://MyMongoDBUser:abc123abc123@cluster0.bscp6.mongodb.net/Hexenkessel?retryWrites=true&w=majority";
    //mongodb+srv://MyMongoDBUser:<password>@cluster0.bscp6.mongodb.net/<dbname>?retryWrites=true&w=majority

    startServer(port);
    connectToDatabase(databaseURL); 

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        //console.log(server);
        console.log("Server starting on: " + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Hexenkessel").collection("Orders"); 
    }
 
    

    //function handleRequest(): void {
    //    console.log("Whats up?");
    //}

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //console.log(_request.url);

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        

        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string | null = url.pathname;
            if (path == "/save") {

                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "</br>");
              
                } 
                console.log(url.query);
    
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
    
                storeOrder(url.query);
            }
            else if (path == "/get") {
                orders.find({}).toArray(function (err: Mongo.MongoError, result: string[]): void {

                    if (err)
                        throw err;

                    let resultString: string = "";
                    resultString += "[";
                    for (let i: number = 0; i < result.length; i++) {
                        resultString += JSON.stringify(result[i]);
                        if (i != result.length - 1)
                            resultString += ",";
                    }
                    resultString += "]";
                    _response.write(JSON.stringify(resultString));



                });
            }
            
        }  

        _response.end();

        /* if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            
            //console.log(url.query);
            for (let key in url.query) {
                _response.write_response.end();(key + ":" + url.query[key] + "<br>");
            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }

        console.log("request");
       
        

        _response.write("This is my response");
         */
    } 
    function storeOrder(_order: Order): void {
        orders.insert(_order); 
        
    }
}




/* abc123 x2 MyMongoDBUser */