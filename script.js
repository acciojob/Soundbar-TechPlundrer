const buttons = document.querySelectorAll(".btn");

// Create audio element ONCE and add to DOM
const audio = document.createElement("audio");
document.body.appendChild(audio);

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Stop button
        if (button.classList.contains("stop")) {
            audio.pause();
            audio.currentTime = 0;
            return;
        }

        const sound = button.getAttribute("data-sound");

        // Load and play sound
        audio.src = `sounds/${sound}.mp3`;
        audio.currentTime = 0;
        audio.play();
    });
});
