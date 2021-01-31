"use strict";
var Firework;
(function (Firework) {
    let color1 = document.getElementById("colorpicker1");
    let color2 = document.getElementById("colorpicker2");
    let radius = document.getElementById("radius");
    let particles = document.getElementById("particles");
    let fireCrackerDiv1 = document.getElementById("firecracker1");
    fireCrackerDiv1.addEventListener("click", function () {
        chooseFirecracker(this);
    });
    let fireCrackerDiv2 = document.getElementById("firecracker2");
    fireCrackerDiv2.addEventListener("click", function () {
        chooseFirecracker(this);
    });
    let fireCrackerDiv3 = document.getElementById("firecracker3");
    fireCrackerDiv3.addEventListener("click", function () {
        chooseFirecracker(this);
    });
    async function chooseFirecracker(div) {
        removeColor();
        div.classList.add("selected");
        let response = await fetch("http://localhost:5001/getAll");
        let responseString = await response.text();
        // let responseString: string = JSON.stringify(response);
        console.log(responseString);
        let firecrackers = await JSON.parse(responseString);
        console.log(div.getAttribute("firecrackerId"));
        for (let i = 0; i < firecrackers.length; i++) {
            if (Number(div.getAttribute("firecrackerId")) == firecrackers[i].firecrackerId) {
                color1.value = "#" + firecrackers[i].color1;
                color2.value = "#" + firecrackers[i].color2;
                particles.value = firecrackers[i].particles.toString();
                radius.value = firecrackers[i].radius.toString();
            }
        }
    }
    function removeColor() {
        fireCrackerDiv1.classList.remove("selected");
        fireCrackerDiv2.classList.remove("selected");
        fireCrackerDiv3.classList.remove("selected");
    }
    let saveButton = document.getElementById("save");
    saveButton.addEventListener("click", hndSave);
    async function hndSave() {
        let firecrackerId = 0;
        if (fireCrackerDiv1.classList.contains("selected")) {
            firecrackerId = 1;
        }
        if (fireCrackerDiv2.classList.contains("selected")) {
            firecrackerId = 2;
        }
        if (fireCrackerDiv3.classList.contains("selected")) {
            firecrackerId = 3;
        }
        let url = "http://localhost:5001/save?firecrackerId=" + firecrackerId + "&color1=" + color1.value.replace("#", "") + "&color2=" + color2.value.replace("#", "") + "&particles=" + particles.value + "&radius=" + radius.value;
        console.log(url);
        let response = await fetch(url);
        console.log(response);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map