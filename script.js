console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songlist = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "song1",filePath: "songs/song1.mp3",coverPath: "images/jeans.jpg"},
    {songName: "ringtone2",filePath: "songs/ringtone.mp3",coverPath: "images/jeans1.jpg"},
    {songName: "ringtone3",filePath: "songs/ringtone.mp3",coverPath: "images/jeans2.jpg"},
    {songName: "ringtone4",filePath: "songs/ringtone.mp3",coverPath: "images/jeans3.jpg"},
    {songName: "ringtone5",filePath: "songs/ringtone.mp3",coverPath: "images/jeans4.jpg"},
    {songName: "ringtone6",filePath: "songs/ringtone.mp3",coverPath: "images/jeans5.jpg"},
    {songName: "ringtone7",filePath: "songs/ringtone.mp3",coverPath: "images/jeans6.jpg"},
    {songName: "ringtone8",filePath: "songs/ringtone.mp3",coverPath: "images/jeans7.jpg"},
    {songName: "ringtone9",filePath: "songs/ringtone.mp3",coverPath: "images/jeans8.jpg"},
    {songName: "ringtone10",filePath: "songs/ringtone.mp3",coverPath: "images/jeans9.jpg"},

]

songlist.forEach((element,i) => {
    console.log(element,i +" prem");
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("timestamp")[0].innerText = 
    
})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;

    }
});

audioElement.addEventListener('timeupdate',()=>{

    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    })
}
Array.from(document.getElementsByClassName("songiconplay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        var index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = 'songs/ringtone.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    })
})