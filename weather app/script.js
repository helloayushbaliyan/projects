let baseurl = "https://api.openweathermap.org/data/2.5/weather?q="
let button = document.querySelector(".btn")
let input = document.querySelector(".city-name")



let weather = async () => {

    let name = input.value.toLowerCase()

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


