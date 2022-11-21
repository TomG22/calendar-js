const monthsGrid = document.getElementById('monthsGrid');
const scrollBar = document.getElementById('scrollBar');
const scrollButton = document.getElementById('scrollButton');
const sideBar = document.getElementById('sideBar');
const monthBanner = document.getElementById('monthBanner');


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function test(id) {
    console.log(id);
}

function newMonth(month, year) {
    month -= 1;
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month+1, 0).getDate();
    const monthBanner = document.createElement("div");
    monthBanner.textContent = months[month];
    month = document.createElement("div");
    month.className = "monthBox";
    monthsGrid.appendChild(month);
    for (let w_i = 0; w_i < 5; w_i++) {
        const week = document.createElement("div");
        monthsGrid.appendChild(week);
        week.className = "weekBox";
        week.id = w_i;
        for (let d_i = 0; d_i < 7; d_i++) {
            const dayNum = w_i*7+d_i+1-firstDay;
            const day = document.createElement("label");
            week.appendChild(day);
            day.className = "dayBox";
            day.id = d_i;
            if (0 < dayNum && dayNum <= lastDay) {
                day.textContent = dayNum;
                day.onclick = function(){test(dayNum)};
            } else {
                day.style["background-color"] = window.getComputedStyle(document.body, null)['background-color'];
            }
        }
    }
    return month
}

function newYear(year) {
    for (let i = 0; i < 12; i++) {
        month = newMonth(i, year);
        if (i == 0) {
            month.style['margin-top'] = 0+"px"; 
        }
    }
}

function onScroll(event, mouseDown) {
    if (mouseDown == 1 && 75 <= event.y && event.y <= 750) {
                    scrollButton.style.top = event.y - 75+"px";
                    monthsGrid.scrollTo(0, (event.y - 75)*12.5);
                    scrollButton.style['border-radius'] = '100px 100px 100px 100px';
                } else if (mouseDown == 1 && event.y < 337.5) {
                    scrollButton.style.top = 0+"px";
                    monthsGrid.scrollTo(0, (event.y - 75)*12.5);
                    scrollButton.style['border-radius'] = '5px 5px 20px 20px';
                } else if (mouseDown == 1 && event.y > 337.5) {
                    scrollButton.style.top = 675+"px";
                    monthsGrid.scrollTo(0, 675*12.6);
                    scrollButton.style['border-radius'] = '20px 20px 5px 5px';
                }
}

function scroll() {
    let mouseDown = 0
        scrollBar.addEventListener('mousedown', (event) => {
            if (event.button == 0) {
                    mouseDown = 1;
                    onScroll(event, mouseDown);
                    window.addEventListener('mousemove', (event) => {
                    onScroll(event, mouseDown);
                })
            }
        })
        document.onmouseup = function(){
            mouseDown = 0;
        }
}

function main() {
    newYear(2022);
    scroll();
}

main();