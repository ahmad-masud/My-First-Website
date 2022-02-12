// Toggle Menu //
function myFnc(e) {
  e.classList.toggle("show");

  var elem = document.getElementById("main-nav");
  Style = window.getComputedStyle(elem);
  Left = Style.getPropertyValue("left");

  if (Left == "0px") {
    elem.style.left = "-250px";
    elem.style.opacity = 0;
    document.getElementById("main").style.filter = "blur(0px)";
    document.getElementById("toggle-button").classList.remove("open2");
    setTimeout(function () {
      document.getElementById("toggle-button").classList.remove("open");
    }, 250);
  } else {
    elem.style.left = "0px";
    elem.style.opacity = 1;
    document.getElementById("main").style.filter = "blur(5px)";
    document.getElementById("toggle-button").classList.add("open");
    setTimeout(function () {
      document.getElementById("toggle-button").classList.add("open2");
    }, 250);
  }
}
window.addEventListener("resize", function () {
  var elem = document.getElementById("main-nav");
  Style = window.getComputedStyle(elem);
  Left = Style.getPropertyValue("left");

  if (window.innerWidth >= 800) {
    elem.style.left = "-250px";
    elem.style.opacity = 0;
    document.getElementById("main").style.filter = "blur(0px)";
    document.getElementById("toggle-button").classList.remove("open");
    document.getElementById("toggle-button").classList.remove("open2");
  }
});

// Reveal Elements on Scroll //
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var links = document.querySelectorAll(".top-link");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Blur Topbar on Scroll //
window.addEventListener("scroll", function () {
  var topbar = document.getElementById("topbar");
  topbar.classList.toggle("sticky", window.scrollY > 0);
});

// Cookies //
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

// Main Color //
document.documentElement.style.setProperty("--main-color", getCookie("color"));

function changeColor(type, color) {
  console.log("Main color changed to " + color);
  document.documentElement.style.setProperty("--main-color", color);
  setCookie("color", color, 10000);
}
