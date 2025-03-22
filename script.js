const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");

document.getElementById("playSong1").addEventListener("click", function () {
    song2.pause();
    song1.play();
});

document.getElementById("playSong2").addEventListener("click", function () {
    song1.pause();
    song2.play();
});

document.getElementById("pauseMusic").addEventListener("click", function () {
    song1.pause();
    song2.pause();
});

// Show surprise message
document.getElementById("surpriseBtn").addEventListener("click", function() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
});

// Hide surprise message
function hideMessage() {
    document.getElementById("surpriseMessage").classList.add("hidden");
}
