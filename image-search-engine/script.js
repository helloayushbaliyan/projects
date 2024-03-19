let imagebox = document.querySelector("#image-container")
let searchbtn = document.querySelector("#search-btn")
let showmorebtn = document.querySelector("#show-more-btn")
let input = document.querySelector("#input-box")
let keyword = ""
let page = 1
let searchimage = async () => {
    keyword = input.value
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=jK3t9USHWaIQUpZHYxRxcVZhEKS7poZv2yT69972wZo&per_page=12`
    let response = await fetch(url)
    let data = await response.json()
    if (page === 1) {
        imagebox.innerHTML = ""
    }
    let result = data.results
    result.map((links) => {
        let image = document.createElement("img")
        let imagelink = document.createElement("a")
        imagelink.href = links.links.html
        imagelink.target = "_blank"
        image.src = links.links.download
        image.loading="lazy"
        imagebox.appendChild(imagelink)
        imagelink.appendChild(image)
    })
    showmorebtn.style.display = "block"
}
let loadimage = (e) => {
    e.preventDefault();
    page = 1
    searchimage()
}
searchbtn.addEventListener("click", loadimage)
showmorebtn.addEventListener("click", () => {
    page++
    searchimage()
})


