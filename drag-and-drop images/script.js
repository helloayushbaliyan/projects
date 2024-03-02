let droparea = document.querySelector("#drop-area")
let inputfile = document.querySelector("#input-file")
let imgview = document.querySelector("#img-view")
let uploadimage = () => {
    let imglink = URL.createObjectURL(inputfile.files[0])
    imgview.style.backgroundImage = `url(${imglink})`
    imgview.textContent = ""
}
inputfile.addEventListener("change", uploadimage)

droparea.addEventListener("dragover", (e) => {
    e.preventDefault()
})
droparea.addEventListener("drop", (e) => {
    e.preventDefault()
    inputfile.files = e.dataTransfer.files
    uploadimage()
})
