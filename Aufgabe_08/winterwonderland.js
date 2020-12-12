"use strict";
var L08_winterwonderland;
(function (L08_winterwonderland) {
    window.addEventListener("load", handleLoad);
    let crc2;
    //let quarter: number = 0.25;
    let half = 0.5;
    let horizon;
    let posMountains;
    let center;
    //let ratio: number; 
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        center = { x: crc2.canvas.width / 2, y: crc2.canvas.height / 2 };
        //let ratio = crc2.canvas.height / crc2.canvas.height;
        let horizon = crc2.canvas.height;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: crc2.canvas.width * 0.8, y: crc2.canvas.height * 0.2 });
        drawMountainsBig(posMountains, 80, 120, "grey", "white");
        drawMountainsSmall(posMountains, 50, 70, "lightgrey", "white");
        drawCloud({ x: crc2.canvas.width * 0.1, y: crc2.canvas.height * 0.3 }, { x: crc2.canvas.width * 0.2, y: crc2.canvas.height * 0.1 });
        drawPiste({ x: 0, y: horizon }, { x: crc2.canvas.width / 2, y: crc2.canvas.height / 2 });
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        /* gradient.addColorStop(quarter, "lightblue"); */
        gradient.addColorStop(half, "white");
        //half = (crc2.canvas.height / 2 );
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = crc2.canvas.height * 0.1;
        let r2 = crc2.canvas.height * 0.2;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(40, 70%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 30;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountainsBig(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("MountainsBig", _position, _min, _max);
        let stepMin = 5;
        let stepMax = 15;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawMountainsSmall(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("MountainsSmall", _position, _min, _max);
        let stepMin = 20;
        let stepMax = 50;
        let x = 0;
        //let y: number = 1;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            /* if (x > center.x - 50 && x < center.x + 50) {
                console.log("est");
                x += 10;
            } else {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = -_min - Math.random() * (_max - _min);
                crc2.lineTo(x, y);
            } */
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -crc2.canvas.height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawPiste(_position, _center) {
        console.log("Piste", _position);
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height);
        crc2.lineTo(center.x - 20, posMountains);
        crc2.lineTo(center.x + 100, center.y / 2);
        crc2.stroke();
    }
})(L08_winterwonderland || (L08_winterwonderland = {}));
//# sourceMappingURL=winterwonderland.js.map