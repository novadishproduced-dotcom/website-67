
const overlay = document.getElementById("overlay");
const music = document.getElementById("bgMusic");
const mainContent = document.getElementById("mainContent");

const playlist = [
  "music.mp3",
  "loveme.mp3"
];

let currentTrack = 0;

function playTrack(index){
  music.src = playlist[index];
  music.play();
}

music.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  playTrack(currentTrack);
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  mainContent.classList.remove("hidden");

  music.volume = 0.5;

  playTrack(currentTrack);
});
