for (var i = 0; i < document.querySelectorAll(".key").length; i++) {
  document.querySelectorAll(".key p")[i].addEventListener("click", theClick);

  function theClick() {
    var keyInnerHtml = this.innerHTML;

    keySound(keyInnerHtml);

    keyAnimation(keyInnerHtml);
  }
}

document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
  keySound(event.key);

  keyAnimation(event.key);
}

function keySound(key) {
  switch (key) {
    case "w":
      var gb1 = new Audio("/Piano-Kit/Piano_Keys/Gb1.mp3");
      gb1.play();

      break;

    case "e":
      var gb2 = new Audio("/Piano-Kit/Piano_Keys/Gb2.mp3");
      gb2.play();
      break;

    case "r":
      var gb3 = new Audio("/Piano-Kit/Piano_Keys/Gb3.mp3");
      gb3.play();
      break;

    case "t":
      var gb4 = new Audio("/Piano-Kit/Piano_Keys/Gb4.mp3");
      gb4.play();
      break;

    case "y":
      var gb5 = new Audio("/Piano-Kit/Piano_Keys/Gb5.mp3");
      gb5.play();
      break;

    case "u":
      var gb6 = new Audio("/Piano-Kit/Piano_Keys/Gb6.mp3");
      gb6.play();
      break;

    case "i":
      var gb7 = new Audio("/Piano-Kit/Piano_Keys/Gb7.mp3");
      gb7.play();
      break;

    case "a":
      var g1 = new Audio("/Piano-Kit/Piano_Keys/G1.mp3");
      g1.play();
      break;

    case "s":
      var g2 = new Audio("/Piano-Kit/Piano_Keys/G2.mp3");
      g2.play();
      break;

    case "d":
      var g3 = new Audio("/Piano-Kit/Piano_Keys/G3.mp3");
      g3.play();
      break;

    case "f":
      var g4 = new Audio("/Piano-Kit/Piano_Keys/G4.mp3");
      g4.play();
      break;

    case "g":
      var g5 = new Audio("/Piano-Kit/Piano_Keys/G5.mp3");
      g5.play();
      break;

    case "h":
      var g6 = new Audio("/Piano-Kit/Piano_Keys/G6.mp3");
      g6.play();
      break;

    case "j":
      var g7 = new Audio("/Piano-Kit/Piano_Keys/G7.mp3");
      g7.play();
      break;

    default:
      console.log(keyInnerHtml);
      break;
  }
}

function keyAnimation(currentKey) {
  var keyDown = document.querySelector("." + currentKey);

  keyDown.classList.add("key_down");

  setTimeout(function () {
    keyDown.classList.remove("key_down");
  }, 200);
}
