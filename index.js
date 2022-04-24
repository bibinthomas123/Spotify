// console.log("its working")

//initialize the variable
let songIndex = 0;
let masterplayer = document.getElementById("masterplay");
let myprogressbar = document.getElementById("progressBar");
let audioElement = new Audio("letmeloveu.mp3");

//music is added here
let songs = [
  {
    songname: "teremere",
    filepath: "location here",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "infinity",
    filepath: "location here",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "heat waves ",
    filepath: "location here",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "let me love u ",
    filepath: "1.mp3",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "arya 1",
    filepath: "location here",
    coverpath: "location to cover page goes here ",
  },
  {
    songname: "trance",
    filepath: "location here",
    coverpath: "location to cover page goes here ",
  },
];

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
