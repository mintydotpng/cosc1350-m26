const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function drawTrapezoid() {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 50);
    ctx.lineTo(125, 150);
    ctx.lineTo(25, 150);
    ctx.lineTo(50, 50);
    ctx.closePath();
    ctx.stroke();
}

function drawDiamond() {
    ctx.fillStyle= "red";
    ctx.fillRect(150, 50, 100, 100);
    ctx.translate(200, 100);
    ctx.rotate(45 * Math.PI / 180);
}

function drawZigzag() {
    ctx.beginPath();
    ctx.moveTo(275, 50);
    ctx.lineTo(375, 75);
    ctx.lineTo(275, 100);
    ctx.lineTo(375, 125);
    ctx.lineTo(275, 150);
    ctx.stroke();
}

function drawSpiral() {
    ctx.translate(450, 100);
    ctx.beginPath();
    let angle = 0;
    let currentGap = 0;
    for (let i = 0; i < 100; i++) {
        angle += 0.1;
        currentGap += 0.5;
        let x = currentGap * Math.cos(angle);
        let y = currentGap * Math.sin(angle);
        ctx.lineTo(x, y);
    }
}

function drawStar() {
    ctx.translate(575, 100);
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        ctx.lineTo(50 * Math.cos((Math.PI / 2) + (2 * Math.PI * i) / 8),
                   50 * Math.sin((Math.PI / 2) + (2 * Math.PI * i) / 8));
        ctx.lineTo(25 * Math.cos((Math.PI / 2) + (2 * Math.PI * i) / 8),
                   25 * Math.sin((Math.PI / 2) + (2 * Math.PI * i) / 8));
    }
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();
}

drawTrapezoid();
drawDiamond();
drawZigzag();
drawSpiral();
drawStar();