let progress=document.getElementById("progress");
let audio=document.getElementById("song");
let controlicon=document.getElementById("control_icon");

song.onloadedmetadata = function()
{
    progress.max=song.duration;
    progress.value=song.currentTime;
}
/* Working of play and pause button */
function PLAY_PAUSE()
{
    if(controlicon.classList.contains("fa-pause")){
        song.pause();
        controlicon.classList.remove("fa-pause");
        controlicon.classList.add("fa-play");
    }
    else{
        song.play();
        controlicon.classList.add("fa-pause");
        controlicon.classList.remove("fa-play");
    }
}
/* working of progress range  */
if(song.play()){
    setInterval(() => {progress.value=song.currentTime;
    }, 500);
}
/* anywhere */
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    controlicon.classList.add("fa-pause");
    controlicon.classList.remove("fa-play");
}