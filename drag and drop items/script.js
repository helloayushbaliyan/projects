let lists = document.getElementsByClassName("list")
let rightbox = document.querySelector("#right")
let leftbox = document.querySelector("#left")

for ( list of lists) {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target

        rightbox.addEventListener("dragover", (e) => {
            e.preventDefault()
        })
        rightbox.addEventListener("drop", (e) => {
            e.preventDefault()
            rightbox.appendChild(selected)
            selected=null
        })
     
        leftbox.addEventListener("dragover", (e) => {
            e.preventDefault()
        })
        leftbox.addEventListener("drop", (e) => {
            e.preventDefault()
            leftbox.appendChild(selected)
            selected=null
        })
    })
}






















// let uploadimage = () => {
//     let imglink = URL.createObjectURL(inputfile.files[0])
//     imgview.style.backgroundImage = `url(${imglink})`
//     imgview.textContent = ""
// }
// inputfile.addEventListener("change", uploadimage)

// droparea.addEventListener("dragover", (e) => {
//     e.preventDefault()
// })
// droparea.addEventListener("drop", (e) => {
//     e.preventDefault()
//     inputfile.files = e.dataTransfer.files
//     uploadimage()
// })
