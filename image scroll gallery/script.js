let previousbtn = document.querySelector("#previous-btn")
let nextbtn = document.querySelector("#next-btn")
let scrollcontainer = document.querySelector("#scrollcontainer")
let scrollimage = (e) => {
    e.preventDefault()

    scrollcontainer.scrollLeft += e.deltaX
    scrollcontainer.scrollLeft += e.deltaY
    scrollcontainer.style.scrollBehavior="auto"


}
scrollcontainer.addEventListener("wheel", scrollimage)

let previous = () => {
    scrollcontainer.style.scrollBehavior="smooth"
    scrollcontainer.scrollLeft -=960
}
previousbtn.addEventListener("click", previous)

let next = () => {
    scrollcontainer.style.scrollBehavior="smooth"
    scrollcontainer.scrollLeft +=960
}
nextbtn.addEventListener("click", next)
