namespace Firework {
    interface Firecracker {
        id: string;
        firecrackerId: number;
        color1: string;
        color2: string;
        radius: number;
        particles: number; 
    }

    
    let color1: HTMLInputElement = <HTMLInputElement>document.getElementById("colorpicker1");
    let color2: HTMLInputElement = <HTMLInputElement>document.getElementById("colorpicker2");
    let radius: HTMLInputElement = <HTMLInputElement>document.getElementById("radius");
    let particles: HTMLInputElement = <HTMLInputElement>document.getElementById("particles");


    let fireCrackerDiv1: HTMLDivElement = <HTMLDivElement>document.getElementById("firecracker1");
    fireCrackerDiv1.addEventListener("click", function (): void {
        chooseFirecracker(this);
     });

    let fireCrackerDiv2: HTMLDivElement = <HTMLDivElement>document.getElementById("firecracker2");
    fireCrackerDiv2.addEventListener("click", function (): void {
        chooseFirecracker(this);
    });

    let fireCrackerDiv3: HTMLDivElement = <HTMLDivElement>document.getElementById("firecracker3");
    fireCrackerDiv3.addEventListener("click", function (): void {
        chooseFirecracker(this);
     });

    async function chooseFirecracker(div: HTMLDivElement): Promise<void> {
        removeColor();
        div.classList.add("selected");
        let response: Response = await fetch("http://localhost:5001/getAll");
        let responseString: string =  await response.text();
        // let responseString: string = JSON.stringify(response);
        console.log(responseString);
        let firecrackers: Firecracker[] = await JSON.parse(responseString);
        console.log(div.getAttribute("firecrackerId"));

        for (let i: number = 0; i < firecrackers.length; i++) {
            if (Number(div.getAttribute("firecrackerId")) == firecrackers[i].firecrackerId) {
                color1.value = "#" + firecrackers[i].color1;
                color2.value = "#" + firecrackers[i].color2;
                particles.value = firecrackers[i].particles.toString();
                radius.value = firecrackers[i].radius.toString();
            }
        }
         

    }

    function removeColor(): void {
        fireCrackerDiv1.classList.remove("selected");
        fireCrackerDiv2.classList.remove("selected");
        fireCrackerDiv3.classList.remove("selected");
    }

    let saveButton: HTMLInputElement = <HTMLInputElement>document.getElementById("save");
    saveButton.addEventListener("click", hndSave);
    
    async function hndSave(): Promise<void> {

        let firecrackerId: number = 0;
        if (fireCrackerDiv1.classList.contains("selected")) {
            firecrackerId = 1;
        }

        if (fireCrackerDiv2.classList.contains("selected")) {
            firecrackerId = 2;
        }

        if (fireCrackerDiv3.classList.contains("selected")) {
            firecrackerId = 3;
        }

        let url: string = "http://localhost:5001/save?firecrackerId=" + firecrackerId + "&color1=" + color1.value.replace("#", "") + "&color2=" + color2.value.replace("#", "") + "&particles=" + particles.value + "&radius=" + radius.value; 
        console.log(url);
        let response: Response = await fetch(url);
        console.log(response);

    }
}
