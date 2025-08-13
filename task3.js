const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const colorBox = document.getElementById("colorBox");

function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.color = rgbColor;
    colorBox.textContent = `${rgbColor}`;
}


updateColor();

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
