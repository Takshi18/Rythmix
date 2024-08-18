console.log("welcome to Spotify")

// initialize the variable
let songIndex = 0;
let audioElement  = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myprogressbar');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Shedur Laal Chadhayo(Aarti)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Aarambh Hai Prachand", filePath: "/songs/2.mp3", coverPath: "/covers/2.jpg"},
    {songName: "Mangal Bhavan Amangal Haari", filePath: "/songs/3.mp3", coverPath: "/covers/3.jpg"},
    {songName: "Aathma Raama", filePath: "/songs/4.mp3", coverPath: "/covers/4.jpg"},
    {songName: "Shiv tandav Stotram", filePath: "/songs/5.mp3", coverPath: "/covers/5.jpg"},
    {songName: "Salam-e-ishq", filePath: "/songs/6.mp3", coverPath: "/covers/6.jpg"},
    {songName: "Shiv Panchakshar Stotra", filePath: "/songs/7.mp3", coverPath: "/covers/7.jpg"},
    {songName: "Mahabali Maharudra", filePath: "/songs/8.mp3", coverPath: "/covers/8.jpg"},
    {songName: "Gajanana", filePath: "/songs/9.mp3", coverPath: "/covers/9.jpg"},
    {songName: "Hanuman Chalisa", filePath: "/songs/10.mp3", coverPath: "/covers/10.jpg"},
]


songItems.forEach((element,i) =>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


    
})
// audioElement.play();

// handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        
        
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play-circle');
        // gif.style.opacity = 1;
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{

    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause');
        audioElement.src = `/spotify/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }) 
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `/spotify/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;audioElement.currentTime = 0;

    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause');
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `/spotify/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause');
})
