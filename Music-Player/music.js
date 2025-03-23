
const songs = [
    { title: "King Shit", artist: "Shubh", src: "./assets/128-King Shit - Leo 128 Kbps.mp3", cover: "./assets/128King Shit - Leo 128 Kbps.jpg" },
    { title: "Happy Birthday", artist: "Piano", src: "./assets/happy-birthday-to-you-piano-version-13976.mp3", cover: "./assets/happy-birthday-8845443_1280.png" },
    { title: "Downtown", artist: "Benjamin Tissot", src: "./assets/downtown.mp3", cover:"./assets/downtown-thumb.jpg" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const songTitle = document.getElementById("song-title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover-img");

const loadSong = (song) => {
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src; // Uses local file path
    cover.src = song.cover
};

const playPause = () => {
    if (audio.paused) {
        audio.play();
        cover.classList.add('animate-rotate')
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        cover.classList.remove('animate-rotate')
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
};

const prevSong = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    cover.classList.add('animate-rotate')
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
};

const nextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    cover.classList.add('animate-rotate')
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
};

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

playBtn.addEventListener("click", playPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

loadSong(songs[currentSongIndex]);
