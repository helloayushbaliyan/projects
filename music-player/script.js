let progressbar = document.querySelector("#range-slider")
let audio = document.querySelector("#audio-controls")
let control = document.querySelector("#ctrl-icon")

audio.onloadedmetadata = function () {
    progressbar.max = audio.duration;
    progressbar.value = audio.currentTime;

}
let playpause = () => {
    if (control.classList.contains("fa-pause")) {
        audio.pause()
        control.classList.remove("fa-pause")
        control.classList.add("fa-play")
    } else {
        audio.play()
        control.classList.add("fa-pause")
        control.classList.remove("fa-play")
    }
}
if (audio.play()) {
    setInterval(() => {
        progressbar.value = audio.currentTime;
    },1000);
}
progressbar.addEventListener("change", () => {
    audio.play()
    audio.currentTime = progressbar.value;
    control.classList.add("fa-pause")
    control.classList.remove("fa-play")

}
)
control.addEventListener("click", playpause)
