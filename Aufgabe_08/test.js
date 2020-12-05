"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
//crc2.fillStyle = "#FF0000";
//crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
//crc2.beginPath();
//crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
crc2.beginPath();
crc2.moveTo(2.1, 1);
crc2.lineTo(2.1, 10);
crc2.moveTo(4.5, 1);
crc2.lineTo(4.5, 10);
crc2.moveTo(7.5, 1);
crc2.lineTo(10.5, 10);
crc2.stroke();
crc2.closePath();
crc2.stroke();
//# sourceMappingURL=test.js.map