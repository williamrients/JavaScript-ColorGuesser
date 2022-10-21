var num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
  num9,
  num10,
  num11,
  num12,
  num12,
  num13,
  num14,
  num15,
  num16,
  num17,
  num18;
var displayColor = document.getElementById("color-showed");
var circleColor1 = document.getElementById("circle1");
var circleColor2 = document.getElementById("circle2");
var circleColor3 = document.getElementById("circle3");
var circleColor4 = document.getElementById("circle4");
var circleColor5 = document.getElementById("circle5");
var circleColor6 = document.getElementById("circle6");
var colorArray = [];
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const thewinner = document.getElementById("winning-container");
var circle1Click = document.getElementById("circle1");
var circle2Click = document.getElementById("circle2");
var circle3Click = document.getElementById("circle3");
var circle4Click = document.getElementById("circle4");
var circle5Click = document.getElementById("circle5");
var circle6Click = document.getElementById("circle6");
var item;
var maxTries = 3;
var tries;

// icons for footer
$(function () {
  $("#nav-content a[href^='https://www.instagram.com']").append(
    ' <i class="fa-brands fa-instagram"></i>'
  );
  $("#nav-content a[href^='mailto:']").append(
    '<i class="fa-solid fa-envelope"></i>'
  );
  $("#nav-content a[href$='61a94a215']").append(
    '<i class="fa-brands fa-linkedin"></i>'
  );
});

// play button to start the game
$("#play-button").click(function () {
  popup.style.display = "none";
  randomColor();
});

// button to play again after user has won
$("#play-again-button").click(function () {
  colorArray = [];
  randomColor();
  thewinner.style.display = "none";
});

// button to generate new colors
$("#diffColor").click(function () {
  colorArray = [];
  randomColor();
});

//generate 6 random colors
function randomColor() {
  // color 1
  num1 = Math.floor(Math.random() * 256);
  num2 = Math.floor(Math.random() * 256);
  num3 = Math.floor(Math.random() * 256);

  //color 2
  num4 = Math.floor(Math.random() * 256);
  num5 = Math.floor(Math.random() * 256);
  num6 = Math.floor(Math.random() * 256);

  //color 3
  num7 = Math.floor(Math.random() * 256);
  num8 = Math.floor(Math.random() * 256);
  num9 = Math.floor(Math.random() * 256);

  //color 4
  num10 = Math.floor(Math.random() * 256);
  num11 = Math.floor(Math.random() * 256);
  num12 = Math.floor(Math.random() * 256);

  //color 5
  num13 = Math.floor(Math.random() * 256);
  num14 = Math.floor(Math.random() * 256);
  num15 = Math.floor(Math.random() * 256);

  //color 6
  num16 = Math.floor(Math.random() * 256);
  num17 = Math.floor(Math.random() * 256);
  num18 = Math.floor(Math.random() * 256);

  //formats values into rgb format
  color1 = "RGB(" + num1 + ", " + num2 + ", " + num3 + ")";
  color2 = "RGB(" + num4 + ", " + num5 + ", " + num6 + ")";
  color3 = "RGB(" + num7 + ", " + num8 + ", " + num9 + ")";
  color4 = "RGB(" + num10 + ", " + num11 + ", " + num12 + ")";
  color5 = "RGB(" + num13 + ", " + num14 + ", " + num15 + ")";
  color6 = "RGB(" + num16 + ", " + num17 + ", " + num18 + ")";

  //add colors to an array
  colorArray.push(color1, color2, color3, color4, color5, color6);

  // select random color from array
  item = colorArray[Math.floor(Math.random() * colorArray.length)];
  displayColor.innerHTML = item;

  // sets background of circles
  circleColor1.style.backgroundColor = color1;
  circleColor2.style.backgroundColor = color2;
  circleColor3.style.backgroundColor = color3;
  circleColor4.style.backgroundColor = color4;
  circleColor5.style.backgroundColor = color5;
  circleColor6.style.backgroundColor = color6;
}

// records button clicks from user and
//determines if they clicked right one
function checkWinner() {
  circle1Click.addEventListener("click", () => {
    if (displayColor.innerHTML == color1) {
      winner();
    } else {
      showNotification();
    }
  });
  circle2Click.addEventListener("click", () => {
    if (displayColor.innerHTML == color2) {
      winner();
    } else {
      showNotification();
    }
  });
  circle3Click.addEventListener("click", () => {
    if (displayColor.innerHTML == color3) {
      winner();
    } else {
      showNotification();
    }
  });
  circle4Click.addEventListener("click", () => {
    if (displayColor.innerHTML == color4) {
      winner();
    } else {
      showNotification();
    }
  });
  circle5Click.addEventListener("click", () => {
    if (displayColor.innerHTML == color5) {
      winner();
    } else {
      showNotification();
    }
  });
  circle6Click.addEventListener("click", () => {
    if (displayColor.innerHTML == color6) {
      winner();
    } else {
      showNotification();
    }
  });
}

// winning notification
function winner() {
  thewinner.style.display = "flex";
}

// try again notification
function showNotification() {
  notification.classList.add("show");
  setTimeout(function () {
    notification.classList.remove("show");
  }, 500);
}

checkWinner();