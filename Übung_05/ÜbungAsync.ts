namespace ÜbungAsync {

async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
}
}

//function communicate(_url: jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt): void

function communicate() {
    
}