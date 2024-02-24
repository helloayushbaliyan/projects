let paswordbox = document.querySelector(".password")
let length = 12;
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYS"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let symbols="!@#$%^&*()_+><{}|:"
let allchar = uppercase + lowercase + number+ symbols

let randompassword = () => {
    let password = "";
    password += Math.floor(Math.random() * uppercase.length)
    password += Math.floor(Math.random() * number.length)
    password += Math.floor(Math.random() * symbols.length)
    password += Math.floor(Math.random() * lowercase.length)

    while (length > password.length) {
        password += allchar[Math.floor(Math.random()*allchar.length)]
        
}

    paswordbox.value = password
}

let generate = document.querySelector(".gen-btn")
let copy = document.querySelector(".copy")

generate.addEventListener("click", randompassword)
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(paswordbox.value)
})


