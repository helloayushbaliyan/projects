let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let input = document.querySelector(".input-box")
let image = document.querySelector(".qr-img")
let subbtn = document.querySelector(".submit-btn")

subbtn.addEventListener("click", () => {
    if (input.value==="") {
        alert("Enter SOme Link To Generate Qr Code")
    } else{
        image.src = `${url}${input.value}`
    }
    input.value=""
})