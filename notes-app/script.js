let notescont = document.querySelector(".notes-container")
let createbtn = document.querySelector(".create-notes-btn")
let notes = document.querySelectorAll(".input-box")

let showdata = () => {
    notescont.innerHTML = localStorage.getItem("notes")
}
showdata()
let storedata = () => {
    localStorage.setItem("notes", notescont.innerHTML)
}
createbtn.addEventListener("click", () => {
    let notesbox = document.createElement("DIV")
    notesbox.className = "note-box"
    notescont.appendChild(notesbox)
    let inputbox = document.createElement("P")
    let button = document.createElement("BUTTON")
    inputbox.className = "input-box"
    inputbox.setAttribute("contenteditable", "true")
    button.className = "cross-btn"
    button.innerText = "x"
    notesbox.appendChild(inputbox)
    notesbox.appendChild(button)
    storedata()
})

notescont.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
        storedata()
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt=> {
            nt.onkeyup=()=>{
                storedata()
            }
        })
    }
})