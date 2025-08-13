let progress = 0;
const bar = document.getElementById("progressBar");
const percent = document.getElementById("percent");

    setInterval(() => {
    progress++;
    if (progress > 100) {
        progress = 0;
    }
    bar.style.width = progress + "%";
    percent.textContent = progress + "%";
    }, 50); 
