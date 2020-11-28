"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07_Hexenkessel = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5501;
    //let databaseURL: string =  "mongodb://localhost:27017";
    let databaseURL = "mongodb+srv://MyMongoDBUser:<password>@cluster0.bscp6.mongodb.net/<dbname>?retryWrites=true&w=majority";
    //mongodb+srv://MyMongoDBUser:<password>@cluster0.bscp6.mongodb.net/<dbname>?retryWrites=true&w=majority
    startServer(port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer();
        //console.log(server);
        console.log("Server starting on: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Hexenkessel").collection("Orders");
    }
    //function handleRequest(): void {
    //    console.log("Whats up?");
    //}
    function handleRequest(_request, _response) {
        console.log(_request.url);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "</br>");
            }
            console.log(url.query);
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
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
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_Hexenkessel = exports.L07_Hexenkessel || (exports.L07_Hexenkessel = {}));
/* abc123 x2 MyMongoDBUser */ 
//# sourceMappingURL=server.js.map