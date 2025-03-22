// Show surprise message
document.getElementById("surpriseBtn").addEventListener("click", function() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
});

// Hide surprise message
function hideMessage() {
    document.getElementById("surpriseMessage").classList.add("hidden");
});

// Music Player 🎶
const music = document.getElementById("birthdaySong");
const playMusicBtn = document.getElementById("playMusic");

playMusicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playMusicBtn.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        playMusicBtn.innerText = "🎶 Play Birthday Song";
    }
});
