console.log("welcome to spotify")
let audioElement=new Audio('songs/1.mp3')
let songIndex=0;
let play=document.getElementById("play");
let progress=document.getElementById("progress");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("song-item"))
//audioElement.play();
let songs=[
    {songname:"rataan lambiyan" ,filepath:"songs/1.mp3",coverPath:"cover/1.jfif"},
    {songname:"Ved-Tuza" ,filepath:"songs/2.mp3",coverPath:"cover/2.jfif"},
    {songname:"Tuzi Mazi Yari" ,filepath:"songs/3.mp3",coverPath:"cover/3.jfif"},
    {songname:"Leja re" ,filepath:"songs/4.mp3",coverPath:"cover/4.jfif"},
    {songname:"Tera fitoor" ,filepath:"songs/4.mp3",coverPath:"cover/5.jfif"},
    {songname:"Pehla pyar" ,filepath:"songs/5.mp3",coverPath:"cover/6.jfif"}
]
songItems.forEach((element,i) => {
 
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
});
  

play.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
      play.classList.remove('fa-play-circle')
      play.classList.add('fa-pause-circle')
      gif.style.opacity=1;
    }
    else{
        audioElement.pause();
      play.classList.remove('fa-pause-circle')
      play.classList.add('fa-play-circle')
      gif.style.opacity=0;
    }

})
audioElement.addEventListener('timeupdate',()=>{
  console.log("timeupdate")
  myprogress=parseInt((audioElement.currentTime/audioElement.duration)*100)
 progress.value=myprogress
})
progress.addEventListener('change',()=>{
  audioElement.currentTime=progress.value*audioElement.duration/100;
 
})
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-pause-circle")
    element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
  makeAllPlays()
  index=parseInt(e.target.id)
e.target.classList.remove("fa-play-circle")
e.target.classList.add("fa-pause-circle")
audioElement.src=`songs/${index+1}.mp3`
audioElement.currentTime=0;
audioElement.play();
play.classList.remove('fa-play-circle')
play.classList.add('fa-pause-circle')

})
})
document.getElementById("next").addEventListener('click',()=>{
  if(songIndex>=5){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }
audioElement.src=`songs/${songIndex+1}.mp3`
audioElement.currentTime=0;
audioElement.play();
play.classList.remove('fa-play-circle')
play.classList.add('fa-pause-circle')
})
document.getElementById("previous").addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex -=1;
  }
  audioElement.src=`songs/${songIndex+1}.mp3`
audioElement.currentTime=0;
audioElement.play();
play.classList.remove('fa-play-circle')
play.classList.add('fa-pause-circle')
}) 