let baseurl = "https://api.openweathermap.org/data/2.5/weather?q="
let button = document.querySelector(".btn")
let input = document.querySelector(".city-name")



let weather=async () => {

    let name = input.value.toLowerCase()


    let url = `${baseurl}${name}&appid=c14ada2ad81a9e0a0dfe7e27378b4afa`
    let promis = await fetch(url)
    let respnse = await promis.json()
    console.log(respnse);

    let temperature = document.querySelector(".temperature").innerHTML = `${Math.round(respnse.main.temp)}°C`
    let humidity = document.querySelector(".humidity").innerHTML = `${respnse.main.humidity} %`
    let windspeed = document.querySelector(".wind-speed").innerHTML = `${Math.round(respnse.wind.speed)} Km/h`
    let location = document.querySelector(".location-name").innerHTML = `${respnse.name}`

    // let image=document.querySelector(".image")
    // image.src=`images / X${respnse.weather[0].main}.png`
    // let nesrc = document.querySelector

}
button.addEventListener("click",weather )
button.addEventListener("click",weather )


