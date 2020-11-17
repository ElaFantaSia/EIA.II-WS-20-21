namespace L06_test {
    console.log("Bonjour");
    let x: number = 4;
    console.log(x);
    x++;
    console.warn(x);

    console.log(process.env.COMPUTERNAME);
    console.log(process.env.USERNAME);
    console.log(process.env.PORT);

    console.log(process.argv);
    console.log("Hallo " + process.argv[2]);

    process.addListener("exit", handleExit);

    setTimeout(handleTimeout, 2000);

    function handleTimeout(_event: Event): void {
        console.log("Timeout");
    }

    function handleExit(_event: Event): void {
        console.log("Ciao Kakao");
    }
}