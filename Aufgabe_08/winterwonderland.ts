namespace L08_winterwonderland {
   interface Vector {
        x: number;
        y: number;
    }

   window.addEventListener("load", handleLoad);
   let crc2: CanvasRenderingContext2D;
   //let quarter: number = 0.25;
   let half: number = 0.5;
   let horizon: number;
   let posMountains: number;
   let center: Vector;

   //let ratio: number; 
   

   function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        center = {x: crc2.canvas.width / 2, y: crc2.canvas.height / 2};
        //let ratio = crc2.canvas.height / crc2.canvas.height;

        let horizon: number = crc2.canvas.height;
        let posMountains: Vector = { x: 0, y: horizon};
        

        drawBackground();
        drawSun({ x: crc2.canvas.width * 0.8 , y: crc2.canvas.height * 0.2});
        drawMountainsBig(posMountains, 80, 120, "grey", "white");
        drawMountainsSmall(posMountains, 50, 70, "lightgrey", "white");
        
        drawCloud({ x: crc2.canvas.width * 0.1, y: crc2.canvas.height * 0.3 }, { x: crc2.canvas.width * 0.2, y: crc2.canvas.height * 0.1 });
        
        drawPiste({ x: 0, y: horizon}, {x: crc2.canvas.width / 2, y: crc2.canvas.height / 2});
    }

   

   function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        /* gradient.addColorStop(quarter, "lightblue"); */
        gradient.addColorStop(half, "white");

        //half = (crc2.canvas.height / 2 );
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

   function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = crc2.canvas.height * 0.1;
        let r2: number = crc2.canvas.height * 0.2;
        
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(40, 70%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

   function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

   function drawMountainsBig(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("MountainsBig", _position, _min, _max);
        let stepMin: number = 5;
        let stepMax: number = 15;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

   function drawMountainsSmall(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("MountainsSmall", _position, _min, _max);
        let stepMin: number = 20;
        let stepMax: number = 50;
        let x: number = 0;
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
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
            

            
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -crc2.canvas.height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }


    
   function drawPiste(_position: Vector, _center: Vector): void {
        console.log("Piste", _position);

        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height);
        crc2.lineTo(center.x - 20, posMountains);
        crc2.lineTo(center.x + 100, center.y / 2);

        crc2.stroke();
    }

} 



