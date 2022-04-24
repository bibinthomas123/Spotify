// console.log("its working")

//initialize the variable
let songIndex = 0;
let masterplayer = document.getElementById("masterplay");
let myprogressbar = document.getElementById("progressBar");
let audioElement = new Audio("letmeloveu.mp3");
let songitem =Array.from(document.getElementsByClassName('songsItem'));
//music is added here
let songs = [
  {
    songname: "Kadhaippoma",
    filepath: "1.mp3",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "Inayae",
    filepath: "2.mp3",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "Let me love you",
    filepath: "3.mp3",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "Okey oka lokam",
    filepath: "4.mp3",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "Agar Tum Saath ",
    filepath: "5.mp3",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "sometimes all i think about is you",
    filepath: "6.mp3",
    coverpath: "location to cover page goes here ",
  },
];

songitem.forEach((Element,i)=>{
    // console.log(Element,i)
 Element.getElementsByTagName("img")[0].src= songs[i].coverpath;
 Element.getElementsByClassName("songname")[0].innerHTML=songs[i].songname;
//  Element.getElementsByClassName("timestamp")[0].innerHTML=
})

// handle play pause clicks
masterplayer.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplayer.classList.remove("fa-play-circle");
    masterplayer.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterplayer.classList.remove("fa-pause-circle");
    masterplayer.classList.add("fa-play-circle");
  }
});
//listen to events

audioElement.addEventListener("timeupdate", () => {
  console.log("time update");
  //seek bar update
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

const makeAllplays=()=>{
     Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
         Element.classList.remove('fa-pause-circle')
         Element.classList.add('fa-play-circle')
     })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((Element)=>{
      Element.addEventListener("click",(e)=>{
           console.log(e.target);
           makeAllplays();
           index=parseInt(e.target.id)
           e.target.classList.remove('fa-play-circle') 
           e.target.classList.add('fa-pause-circle') 
           audioElement.src=`${index}.mp3`
           audioElement.currentTime=0;
           audioElement.play();
           masterplayer.classList.remove("fa-play-circle")
           masterplayer.classList.add("fa-pause-circle")

      })
})
