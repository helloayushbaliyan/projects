let getcolor = () => {
    let randomnum = Math.floor(Math.random() * 16777215)
    let randomcode = "#" + randomnum.toString(16);

    let color = document.querySelector(".bg-color")
    color.style.backgroundColor=randomcode
    
let code = document.querySelector(".hex-code")
code.innerText=randomcode
navigator.clipboard.writeText(randomcode)
}

let button = document.querySelector(".click-me-btn")
button.addEventListener("click", getcolor)

getcolor();



