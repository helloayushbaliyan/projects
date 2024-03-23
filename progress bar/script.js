let number = document.querySelector(".number")
let numbervalue = 0
setInterval(() => {
    if (numbervalue == 65) {
        clearInterval()
    } else {
        numbervalue += 1
        number.innerText = `${numbervalue}%`
    }
}, 28);
