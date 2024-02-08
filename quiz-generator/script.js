let questions = [
    {
        "que": "which of the folowing is mark up language",
        "a": "html",
        "b": "java",
        "c": "js",
        "d": "kotlin",
        "correct": "a"
    },
    {
        "que": "which of the full form of css",
        "a": "hyper text mark up lnguage",
        "b": "cascada style sheet",
        "c": "pyton",
        "d": "javascript",
        "correct": "b"
    },
    {
        "que": "which of the following is clint side landuage",
        "a": "html",
        "b": "java",
        "c": "javascript",
        "d": "php",
        "correct": "c"
    }
]

let index = 0;
let total = questions.length
let right = 0
let wrong = 0
let quebox = document.querySelector(".que-box")
let option = document.querySelectorAll(".option")

let loadquestion = () => {
    if (index === total) {
        return end()
    }
    else{
        reset()
    const data = questions[index];
    quebox.innerText = `${index + 1}) ${data.que}`
    option[0].nextElementSibling.innerText = data.a
    option[1].nextElementSibling.innerText = data.b
    option[2].nextElementSibling.innerText = data.c
    option[3].nextElementSibling.innerText = data.d
    }

}
let submit = document.querySelector(".submit")
submit.addEventListener("click", () => {
    const data = questions[index];
    let ans = getanswer()
    if (ans==data.correct) {
        right++
        console.log("pass");
    }
    else {
        wrong++
        console.log("fail");
    }
    index++;
    loadquestion()
    return
})
let getanswer = () => {
    option.forEach((input) => {
        if (input.checked) {
            return input.value;
        }
    })

}

let reset = () => {
    option.forEach((input) => {
        input.checked = false
    })
}
let end = () => {
    let content = document.querySelector(".content")
    content.innerHTML = `<h3>thank you</h3>`
}

loadquestion();