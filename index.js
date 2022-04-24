// console.log("its working")

//initialize the variable
let songIndex = 0;
let masterplayer = document.getElementById("masterplay");
let myprogressbar = document.getElementById("progressBar");
let audioElement = new Audio("1.mp3");
let mastersongname = document.getElementById("mastersongname");
let songitem = Array.from(document.getElementsByClassName("songsItem"));
//music is added here
let songs = [
  {
    songname: "Kadhaippoma",
    filepath: "1.mp3",
    coverpath: "1.jpeg",
    duration:"4:49"
  },
  {
    songname: "Inayae",
    filepath: "2.mp3",
    coverpath: "2.jpeg",
    duration:"3:52"
  },
  {
    songname: "Let me love you",
    filepath: "3.mp3",
    coverpath: "3.jpeg",
    duration:"3:25"
  },
  {
    songname: "Okey oka lokam",
    filepath: "4.mp3",
    coverpath: "4.jpeg",
    duration:"3:27"
  },
  {
    songname: "Agar Tum Saath ",
    filepath: "5.mp3",
    coverpath: "5.jpeg",
    duration:"5:41"
  },
  {
    songname: "sometimes all i think about is you",
    filepath: "6.mp3",
    coverpath: "6.jpeg",
    duration:"3:54"
  },
];

songitem.forEach((Element, i) => {
  // console.log(Element,i)
  Element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  Element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname;
  Element.getElementsByClassName('timestamp')[0].textContent=songs[i].duration;
});

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
  //   console.log("time update");
  //seek bar update
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //   console.log(progress);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (Element) => {
      Element.classList.remove("fa-pause-circle");
      Element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (Element) => {
    Element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllplays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterplayer.classList.remove("fa-play-circle");
      masterplayer.classList.add("fa-pause-circle");
        mastersongname.innerHTML = songs[songIndex-1].songname;
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 5) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex}.mp3`;
  mastersongname.innerHTML = songs[songIndex-1].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplayer.classList.remove("fa-play-circle");
  masterplayer.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex < 0) {
    songIndex = 6;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex}.mp3`;
  mastersongname.innerHTML = songs[songIndex-1].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplayer.classList.remove("fa-play-circle");
  masterplayer.classList.add("fa-pause-circle");
});
