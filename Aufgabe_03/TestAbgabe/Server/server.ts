import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace ServerFirework {
    interface Firecracker {
        firecrackerId: number;
        color1: string;
        color2: string;
        radius: number;
        particles: number; 
    }

    let firecrackers: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    //let databaseURL: string =  "mongodb://localhost:27017";
    let databaseURL: string =  "mongodb+srv://MyMongoDBUser:abc123abc123@cluster0.bscp6.mongodb.net/Endabgabe?retryWrites=true&w=majority";
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
        firecrackers = mongoClient.db("Endabgabe").collection("Firecrackers"); 
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log(_request.url);

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        

        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log(url);
            let path: string | null = url.pathname;
            if (path == "/save") {
                
                let firecracker: Firecracker = {
                    firecrackerId:  Number(url.query.firecrackerId),
                    color1: <string>url.query.color1,
                    color2: <string>url.query.color2,
                    particles: Number(url.query.particles),
                    radius: Number(url.query.radius)
                };
                storeFirecracker(firecracker);
                _response.end();
            }
            else if (path == "/getAll") {
                
                let firecrackersArray: string[] = await firecrackers.find({}).toArray();
                console.log(JSON.stringify(firecrackersArray));
                _response.write(JSON.stringify(firecrackersArray));
                _response.end();
            }
            
        }  
    } 
    function storeFirecracker(_firecracker: Firecracker): void {
        firecrackers.insertOne(_firecracker); 
        
    }
}




/* abc123 x2 MyMongoDBUser */