"use strict";
var L08_test;
(function (L08_test) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let posSkier = { x: 425, y: 650 };
        drawSkier(posSkier);
    }
    function drawSkier(_position) {
        console.log("Skier", _position);
        let path = new Path2D();
        path.arc(100, 150, 50, 0, 2 * Math.PI);
        crc2.stroke(path);
    }
    //crc2.fillStyle = "#FF0000";
    //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    //crc2.beginPath();
    //crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    /* crc2.beginPath();
    crc2.moveTo(2.1, 1);
    crc2.lineTo(2.1, 10);
    crc2.moveTo(4.5, 1);
    crc2.lineTo(4.5, 10);
    crc2.moveTo(7.5, 1);
    crc2.lineTo(10.5, 10);
    crc2.stroke();
    
    crc2.closePath();
    crc2.stroke(); */
})(L08_test || (L08_test = {}));
//crc2.fillStyle = "#FF0000";
//crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
//crc2.beginPath();
//crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
/* crc2.beginPath();
crc2.moveTo(2.1, 1);
crc2.lineTo(2.1, 10);
crc2.moveTo(4.5, 1);
crc2.lineTo(4.5, 10);
crc2.moveTo(7.5, 1);
crc2.lineTo(10.5, 10);
crc2.stroke();

crc2.closePath();
crc2.stroke(); */
//# sourceMappingURL=test.js.map