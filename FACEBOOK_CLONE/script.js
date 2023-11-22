var settingsmenu=document.querySelector(".settings-menu");
var darkBtn=document.getElementById("dark-btn")

function SETTINGS_MENU_TOGGLE()
{
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick=function()
{
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
 /* checking at first time visit of website */
    if(localStorage.getItem("theme")=="light")
    {
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}
/* updating after refresh */
if(localStorage.getItem("theme")=="light")
{
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark")
{
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
localStorage.setItem("theme","light");
}