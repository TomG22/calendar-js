const monthsFrame = document.getElementById('monthsFrame')
const sideBar = document.getElementById('sideBar')
const monthBanner = document.getElementById('monthBanner')
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function newMonth(month, year) {
    month -= 1
    const firstDay = new Date(year, month, 1).getDay()
    const lastDay = new Date(year, month+1, 0).getDate()
    const monthBanner = document.createElement("div");
    monthBanner.textContent = months[month]
    month = document.createElement("div")
    month.className = "month"
    monthsFrame.appendChild(month)
    for (let w_i = 0; w_i < 5; w_i++) {
        const week = document.createElement("div");
        monthsFrame.appendChild(week);
        week.className = "week";
        week.id = "week "+w_i;
        for (let d_i = 0; d_i < 7; d_i++) {
            const dayNum = w_i*7+d_i+1-firstDay;
            const day = document.createElement("button");
            week.appendChild(day);
            day.className = "dayBox";
            if (0 < dayNum && dayNum <= lastDay) {
                day.textContent = dayNum;
            } else {
                day.style["background-color"] = window.getComputedStyle(document.body, null)['background-color']
            }
            day.id = "dayBox"+d_i;
            console.log(window.getComputedStyle(day, null))
        }
    }
}

function newYear(year) {
    for (let i = 0; i < 12; i++) {
        newMonth(i, year)
    }
}

newYear(2022)
