"use strict";
var Firework;
(function (Firework) {
    let canvas = document.getElementById("canvas");
    canvas.addEventListener("mouseup", hndMouseUp);
    let ctx = canvas.getContext("2d");
    let currentFirecracker;
    // window.addEventListener("load", loadWnd);
    // async function loadWnd(): Promise<void> {
    //     let response: Response = await fetch("http://localhost:5001/getAll");
    //     let responseString: string =  await response.text();
    //     let firecrackers: Firecracker[] = await JSON.parse(responseString);
    // }
    let fireCrackerDiv1 = document.getElementById("firecracker1");
    fireCrackerDiv1.addEventListener("click", hndClick);
    let fireCrackerDiv2 = document.getElementById("firecracker2");
    fireCrackerDiv2.addEventListener("click", hndClick);
    let fireCrackerDiv3 = document.getElementById("firecracker3");
    fireCrackerDiv3.addEventListener("click", hndClick);
    async function hndClick(_event) {
        removeColor();
        let div = _event.currentTarget;
        div.classList.add("selected");
        let response = await fetch("http://localhost:5001/getAll");
        let responseString = await response.text();
        // let responseString: string = JSON.stringify(response);
        console.log(responseString);
        let firecrackers = await JSON.parse(responseString);
        console.log(div.getAttribute("firecrackerId"));
        for (let i = 0; i < firecrackers.length; i++) {
            if (Number(div.getAttribute("firecrackerId")) == firecrackers[i].firecrackerId) {
                currentFirecracker = {
                    id: firecrackers[i].id,
                    firecrackerId: firecrackers[i].firecrackerId,
                    color1: "#" + firecrackers[i].color1,
                    color2: "#" + firecrackers[i].color2,
                    radius: firecrackers[i].radius,
                    particles: firecrackers[i].particles
                };
            }
        }
        console.log(currentFirecracker);
    }
    function removeColor() {
        fireCrackerDiv1.classList.remove("selected");
        fireCrackerDiv2.classList.remove("selected");
        fireCrackerDiv3.classList.remove("selected");
    }
    let timeout;
    function hndMouseUp(_event) {
        let totalOffsetX = 0;
        let totalOffsetY = 0;
        let canvasX = 0;
        let canvasY = 0;
        let currentElement = this;
        do {
            totalOffsetX += currentElement.offsetLeft;
            totalOffsetY += currentElement.offsetTop;
        } while (currentElement = currentElement.offsetParent);
        canvasX = _event.pageX - totalOffsetX;
        canvasY = _event.pageY - totalOffsetY;
        // Fix for variable canvas width
        canvasX = Math.round(canvasX * (this.width / this.offsetWidth));
        canvasY = Math.round(canvasY * (this.height / this.offsetHeight));
        timeout = setInterval(function () {
            drawExplosion(canvasX, canvasY);
        }, 500);
    }
    let start = 0;
    function drawExplosion(_x, _y) {
        start += 500;
        console.log(start);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        // ctx.beginPath();
        // ctx.arc(centerX, centerY, Number(radius.value), 0, 2 * Math.PI);
        // ctx.stroke();
        let circleSteps = Math.PI * 2 / currentFirecracker.particles;
        for (let i = 0; i < Math.PI * 2; i += circleSteps) {
            drawParticle(i, 2, _x, _y, start);
        }
        ctx.restore();
        if (start > 3000) {
            clearInterval(timeout);
        }
    }
    function drawParticle(radiusParticle, lineWidth, _x, _y, _time) {
        ctx.setTransform(1, 0, 0, 1, _x, _y);
        ctx.rotate(radiusParticle);
        ctx.translate(0, radiusParticle);
        let gradient = ctx.createLinearGradient(-lineWidth / 2, 0, lineWidth, currentFirecracker.radius);
        gradient.addColorStop(0, currentFirecracker.color1);
        gradient.addColorStop(1, currentFirecracker.color2);
        ctx.fillStyle = gradient;
        let animationradius;
        if (_time < 1000) {
            animationradius = currentFirecracker.radius / 3;
        }
        else if (_time < 2000) {
            animationradius = currentFirecracker.radius / 2;
        }
        else {
            animationradius = currentFirecracker.radius;
        }
        ctx.fillRect(-lineWidth / 2, 0, lineWidth, animationradius);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=play.js.map