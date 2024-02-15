let baseurl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

let dropdown = document.querySelectorAll(".drop-down select")

for (const select of dropdown) {
    for (currencycode in countryList) {
        let newoption = document.createElement("option")
        newoption.innerText = currencycode
        newoption.value = currencycode
        if (select.name === "from" && currencycode === "USD") {
            newoption.selected = "selected";
        }
        else if (select.name === "to" && currencycode === "INR") {
            newoption.selected = "selected";
        }
        select.append(newoption)
    }

    select.addEventListener("change", (e) => {
        updateflag(e.target)

    })
}

let updateflag = (element) => {
    currencycode = element.value
    let countrycode = countryList[currencycode]
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newsrc
}

let btn = document.querySelector(".btn")
let fromcurr = document.querySelector(".from-scn select")
let tocurr = document.querySelector(".to-scn select")
let msg = document.querySelector(".msg")
window.addEventListener("load", () => {
    updatefinalrate()
})

btn.addEventListener("click", (e) => {
    e.preventDefault()
    updatefinalrate();

})


let updatefinalrate = async () => {
    let ammount = document.querySelector("input")
    amtval = ammount.value
    if (amtval === "" || amtval < 1) {
        amtval = 1
        ammount.value = "1"
    }
    console.log(amtval);

    let url = `${baseurl}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`
    let response = await fetch(url)
    let data = await response.json()
    let rate = await data[tocurr.value.toLowerCase()]
    console.log(rate);
    let finallrate = amtval * rate
    console.log(finallrate);
    msg.innerText = `${amtval} ${fromcurr.value} = ${finallrate} ${tocurr.value}`
}

ammount.addEventListener("keypress", () => {
    updatefinalrate()
})
// updatefinalrate()