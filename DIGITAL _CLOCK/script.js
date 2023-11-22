const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");

function digitalClock()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "PM"

    if(h > 12)
    {
        h = h-12;
        ampm = "AM";
    }

    h = h < 10 ? "0" + h : h;
    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm,(innerText = ampm);
    setTimeout(() => {
        digitalClock()
    }, 1000);
}
digitalClock();