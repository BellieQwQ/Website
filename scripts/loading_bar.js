const bar_progress = document.getElementById("progress_content")
const bar_text = document.getElementById("loading_percentage")

let progress = 0;

bar_text.textContent = "0%";

function setRandomProgress() {
  const random_progress = Math.floor(Math.random() * (300 - 10)) + 10;
  return random_progress;
}

function updateProgressBar() {
    if (progress < 100){
        progress += 1;
        bar_progress.style.width = progress + "%";
        bar_text.textContent = progress + "%";

        setTimeout(updateProgressBar, setRandomProgress());
    }
    
}

setTimeout(updateProgressBar, 2000);

