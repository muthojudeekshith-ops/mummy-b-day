/* 🎯 FIXED DATE – April 25 (Auto next year) */

function getNextBirthday() {
  let now = new Date();
  let year = now.getFullYear();

  let birthday = new Date(year, 3, 25); // Month 3 = April (0-based index)

  // If this year's April 25 is already passed → set next year
  if (now > birthday) {
    birthday = new Date(year + 1, 3, 25);
  }

  return birthday.getTime();
}

let targetDate = getNextBirthday();

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


/* 💖 SHOW MESSAGE */
function showMessage(){
  document.getElementById("screen1").style.display="none";
  document.getElementById("screen3").style.display="flex";
}


/* 🌟 Floating Stars & Hearts */
function createFloating(){
  let item = document.createElement("div");
  item.classList.add("floating");
  item.innerHTML = Math.random() > 0.5 ? "⭐" : "💖";
  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = (15 + Math.random() * 25) + "px";
  item.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(item);

  setTimeout(()=>{
    item.remove();
  },10000);
}

setInterval(createFloating, 500);
