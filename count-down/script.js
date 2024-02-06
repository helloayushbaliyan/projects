let enddate = "07 February 2024 10:00 AM";
let time = document.querySelectorAll(".time");  
// here input is target
document.querySelector("#end-date").innerText = enddate;

function clock() {
    let launchdate = new Date(enddate)
    let currentdate = new Date()
    let diffrence = (launchdate - currentdate) / 1000;

    if(diffrence<0) return``
    time[0].value = Math.floor(diffrence / 3600 / 24)
    time[1].value = Math.floor((diffrence / 3600) % 24)
    time[2].value = Math.floor((diffrence / 60) % 60)
    time[3].value = Math.floor(diffrence % 60) 

}
// initial call of clock function
clock();

// 1 day=24 hours
// 1 hours = 60min
// 60min=3600 second


// here is the function which delay the time of 1s
setInterval(
    () => {
        clock()
    }
    ,1000
)
