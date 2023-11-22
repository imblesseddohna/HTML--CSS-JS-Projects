console.log("Wecome to spotify");

//initialise variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Sickick-Intro(Infected)",filePath:"songs/1.mp3",coverPath:"./img/cover.jpeg"},
    {songName:"Teya Dora-Dzanum",filePath:"songs/2.mp3",coverPath:"./img/cover1.jpeg"},
    {songName:"Instasamka-Отключаю телефон",filePath:"songs/3.mp3",coverPath:"./img/cover2.jpeg"},
    {songName:"Oleetreka-Nightcore Thunder",filePath:"./4.mp3",coverPath:"./img/cover3.jpeg"},
    {songName:"The Weeknd-Starboy",filePath:"songs/5.mp3",coverPath:"./img/cover4.jpeg"},
    {songName:"Jony-Love Your Voice",filePath:"songs/6.mp3",coverPath:"./img/cover5.jpeg"},
    {songName:"Coldplay-Hymn for the Weekend",filePath:"songs/7.mp3",coverPath:"./img/cover6.jpeg"},
    {songName:"Jaymes Young-Infinity",filePath:"songs/8.mp3",coverPath:"./img/cover7.jpeg"},
    {songName:"Sean Paul-No Lie",filePath:"songs/9.mp3",coverPath:"./img/cover8.jpeg"},
    {songName:"Elley Duhé-Middle Of The Night",filePath:"songs/10.mp3",coverPath:"./img/cover9.jpeg"}  
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].songName;
    
})
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})