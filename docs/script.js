/* 🎯 TARGET DATE (Change anytime here) */
let targetDate = new Date("april 25, 2026 00:00:00").getTime();

/* ⏳ COUNTDOWN */
let timer = setInterval(function(){

  let now = new Date().getTime();
  let distance = targetDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if(distance < 0){
    clearInterval(timer);
    document.getElementById("countdown").style.display="none";
    document.getElementById("birthdayBtn").style.display="block";
  }

},1000);

/* 💖 SHOW MESSAGE SCREEN */
function showMessage(){
  document.getElementById("screen1").style.display="none";
  document.getElementById("screen3").style.display="flex";
}

/* 🌟 Floating stars & hearts */
function createFloating(){
  let item = document.createElement("div");
  item.classList.add("floating");
  item.innerHTML = Math.random() > 0.5 ? "⭐" : "💖";
  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = (15 + Math.random() * 25) + "px";
  item.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.getElementById("floatingContainer").appendChild(item);


  setTimeout(()=>{
    item.remove();
  },10000);
}

setInterval(createFloating, 500);
