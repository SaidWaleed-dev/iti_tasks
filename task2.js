const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const colorInput = document.getElementById("colorInput");

function drawCircles(color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < 20; i++) { 
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let radius = Math.random() * 20;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    }
}

drawCircles(colorInput.value);

colorInput.addEventListener("input", function () {
    drawCircles(colorInput.value);
});
