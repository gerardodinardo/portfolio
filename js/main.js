


function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

//el vídeo
var vid = document.getElementById("video");


function getCurTime() {
  alert(vid.currentTime);
}

function Avanza() {
  vid.currentTime = vid.currentTime + 10;
}

function Retrocede() {
  vid.currentTime = vid.currentTime - 10;
}