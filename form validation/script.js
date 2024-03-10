let nameerror = document.querySelector("#name-error")
let phoneerror = document.querySelector("#phone-error")
let emailerror = document.querySelector("#email-error")
let messageerror = document.querySelector("#message-error")
let submiterror = document.querySelector("#submit-error")
let namefield = document.querySelector("#name-field")
let phonefield = document.querySelector("#phone-field")
let emailfield = document.querySelector("#email-field")
let submitbtn = document.querySelector("#submit-btn")




let validatename = () => {
    let name = namefield.value
    if (name.length === 0) {
        nameerror.innerHTML = "name is required"
        return false
    } else {

        nameerror.innerHTML = `<i class="fas fa-check-circle  text-green-600"></i>`
        return true
    }
}
namefield.addEventListener("keyup", validatename)

let validatephone = () => {
    let phone = phonefield.value
    if (phone.length === 0) {
        phoneerror.innerHTML = "phone no. is required"
        return false
    }
    if (phone.length !== 10) {
        phoneerror.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`
        return false
    }
    else {
        phoneerror.innerHTML = `<i class="fas fa-check-circle  text-green-600"></i>`
        return true
    }
}
phonefield.addEventListener("keyup", validatephone)

let validateemail = () => {
    let email = emailfield.value
    if (email.length === 0) {
        emailerror.innerHTML = "email is required"
       
        return false
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/)) {
        emailerror.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`

        return false
    }
    else {
        emailerror.innerHTML = `<i class="fas fa-check-circle  text-green-600"></i>`
        return true
    }
}
emailfield.addEventListener("keyup", validateemail)

let validateform = (e) => {

    if (!validatename() || !validatephone() || !validateemail()) {
        e.preventDefault()
        submiterror.style.display = `block`
        submiterror.innerHTML = "please fix error"
        setTimeout(() => {
            submiterror.style.display = `none`
        }, 3000);
        return false
    }

}
submitbtn.addEventListener("click", validateform)
