
let todolist = document.querySelector(".to-do-list ")
let addbtn = document.querySelector(".add-btn")
let inputlist = document.querySelector(".add-list")



addbtn.addEventListener("click", (e) => {
    if (inputlist.value === "") {
        alert("please enter some thing in input field")
    }
    else {
        let li = document.createElement("li")
        li.innerText = inputlist.value
        todolist.appendChild(li)
        let span = document.createElement("span")
        span.innerText = "x"
        li.appendChild(span)
    }
    inputlist.value = "";
    savedata();
})
todolist.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("list-i")
        savedata()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        savedata()
    }
})

let savedata = () => {
    localStorage.setItem("data", todolist.innerHTML)
}
let showdata = () => {
todolist.innerHTML=localStorage.getItem("data")
}
showdata()






