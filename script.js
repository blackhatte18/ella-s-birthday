// Create Floating Hearts
function createFloatingHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        document.body.appendChild(heart);
    }
}

// Confetti Effect
function createConfetti() {
    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 3 + 3 + "s";
        document.body.appendChild(confetti);
    }
}

createFloatingHearts();
createConfetti();

