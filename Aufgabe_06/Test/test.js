"use strict";
var L06_test;
(function (L06_test) {
    console.log("Bonjour");
    let x = 4;
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
    function handleTimeout(_event) {
        console.log("Timeout");
    }
    function handleExit(_event) {
        console.log("Ciao Kakao");
    }
})(L06_test || (L06_test = {}));
//# sourceMappingURL=test.js.map