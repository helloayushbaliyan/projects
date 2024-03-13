let speach = new SpeechSynthesisUtterance()
let listenbtn = document.querySelector("#listen-btn")
let voiceselect = document.querySelector("#voice-change")
let voices = []
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices()
    voices.forEach((voice, i) => {
        let options = document.createElement("option")
        options.value = i
        options.innerText = voice.name
        voiceselect.appendChild(options)
    })
}
voiceselect.addEventListener("change", () => {
    speach.voice=voices[voiceselect.value]
})


listenbtn.addEventListener("click", () => {
    let textscn = document.querySelector("#text-scn")
    speach.text = textscn.value
    window.speechSynthesis.speak(speach)
})