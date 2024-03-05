let baseurl = "https://api.openweathermap.org/data/2.5/weather?q="
let button = document.querySelector(".btn")
let input = document.querySelector(".city-name")



let weather = async () => {

    let name = input.value.toLowerCase()

    if (name === "") {
        alert("please enter city name")
    }
    let url = `${baseurl}${name}&appid=c14ada2ad81a9e0a0dfe7e27378b4afa`
    let promis = await fetch(url)
    let respnse = await promis.json()
    console.log(respnse);

    let temperature = document.querySelector(".temperature").innerHTML = `${Math.round(respnse.main.temp - 273.15)}°C`
    let humidity = document.querySelector(".humidity").innerHTML = `${respnse.main.humidity} %`
    let windspeed = document.querySelector(".wind-speed").innerHTML = `${Math.round(respnse.wind.speed * 3.6)} Km/h`
    let location = document.querySelector(".location-name").innerHTML = `${respnse.name}`
    let condition = document.querySelector(".weather-condition").innerHTML = respnse.weather[0].main

    let images = document.querySelector(".image")
    images.src = await `images/${respnse.weather[0].main}.png`

    let weatherscn = document.querySelector(".weather-scn").style.display = "block"

}
button.addEventListener("click", weather);
// input.addEventListener("input", weather)



let citynames = []
let getcitydata = async () => {
    const cityurl = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
    const citydata = await cityurl.json()
    const data = citydata.data
    citynames = data.map((names) => {
        return names.city
    })
}
getcitydata()

let onchange = () => {
    removeautocomplete()

    let value = input.value.toLowerCase()
    if (value.length === 0) {
        return
    }
    let filtername = []
    citynames.forEach((cityname) => {
        if (cityname.substr(0, value.length).toLowerCase() === value) {
            filtername.push(cityname)
        }
    })
    autocomplete(filtername)
}

let autocomplete = (list) => {
    let listel = document.createElement("ul")
    listel.className = "city-data"
    listel.id = "city-name-data"

    list.forEach((names) => {
        // let listitems = document.createElement("li")
        // listel.appendChild(listitems)
        let listitembtn = document.createElement("button")
        listitembtn.innerHTML = names
        listitembtn.addEventListener("click", oncitybuttonclick)
        listitembtn.addEventListener("click", weather)

        listel.appendChild(listitembtn)
    })
    let search = document.querySelector(".city-search-box").appendChild(listel)
}

let removeautocomplete = () => {
    let listel = document.querySelector("#city-name-data")
    if (listel) {
        listel.remove()
    }
}

let oncitybuttonclick = (e) => {
    e.preventDefault()
    let buttonel = e.target;
    input.value = buttonel.innerHTML
    removeautocomplete()
}
input.addEventListener("input", onchange)
