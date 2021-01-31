"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerFirework = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var ServerFirework;
(function (ServerFirework) {
    let firecrackers;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    //let databaseURL: string =  "mongodb://localhost:27017";
    let databaseURL = "mongodb+srv://MyMongoDBUser:abc123abc123@cluster0.bscp6.mongodb.net/Endabgabe?retryWrites=true&w=majority";
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
        firecrackers = mongoClient.db("Endabgabe").collection("Firecrackers");
    }
    async function handleRequest(_request, _response) {
        console.log(_request.url);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            console.log(url);
            let path = url.pathname;
            if (path == "/save") {
                let firecracker = {
                    firecrackerId: Number(url.query.firecrackerId),
                    color1: url.query.color1,
                    color2: url.query.color2,
                    particles: Number(url.query.particles),
                    radius: Number(url.query.radius)
                };
                storeFirecracker(firecracker);
                _response.end();
            }
            else if (path == "/getAll") {
                let firecrackersArray = await firecrackers.find({}).toArray();
                console.log(JSON.stringify(firecrackersArray));
                _response.write(JSON.stringify(firecrackersArray));
                _response.end();
            }
        }
    }
    function storeFirecracker(_firecracker) {
        firecrackers.insertOne(_firecracker);
    }
})(ServerFirework = exports.ServerFirework || (exports.ServerFirework = {}));
/* abc123 x2 MyMongoDBUser */ 
//# sourceMappingURL=server.js.map