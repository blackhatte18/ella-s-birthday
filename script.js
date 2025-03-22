// Show surprise message
document.getElementById("surpriseBtn").addEventListener("click", function() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
});

// Hide surprise message
function hideMessage() {
    document.getElementById("surpriseMessage").classList.add("hidden");
}

// Floating Hearts Animation
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}, 300);

// Fireworks Effect 🎆
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 3 + 1;
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 30; i++) {
        createFirework();
    }
}, 500);

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
