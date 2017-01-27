var level = 1;

function gameOver(event){
    var theBody = document.getElementsByTagName("body")[0];
    theBody.removeEventListener("click", gameOver);
    document.location.href = "Restart.html";
    alert("Game Over At Level : "+ level);
}

function generateFaces() {
var levelDisplay = document.getElementById("level");
levelDisplay.innerHTML = "Click On The Extra Smiley On The Left BOX!!<br> Current Level <strong id = 'actualLevel'>" + level + "</strong>";
  var numberOfFaces = getLevelBasedNumber();
  while(numberOfFaces > 0){
  var face = createFace();
  placeTheFaceOnBothSide(face);
    numberOfFaces--;
  }
  addExtraFaceToLeft();
}

function addExtraFaceToLeft(){
var leftBox = document.getElementsByClassName("leftBox")[0];

  var face = createFace();
  var randomLeft = Math.floor(Math.random()*450)+ 220;
  var leftString = randomLeft.toString() + "px";
  face.style.cssText += 'left :' + leftString + ';';
  face.setAttribute("class", "activeImage");
  face.setAttribute("onclick", "levelUp(event);");
  leftBox.appendChild(face);
}

function levelUp(event){
var theBody = document.getElementsByTagName("body")[0];
var leftBox = document.getElementsByClassName("leftBox")[0];
var rightBox = document.getElementsByClassName("rightBox")[0];
event.stopPropagation();

  level ++;
  leftBox.innerHTML = "";
  rightBox.innerHTML = "";
  generateFaces();
}

function placeTheFaceOnBothSide(face){
  var clonedFace = face.cloneNode(true);
var leftBox = document.getElementsByClassName("leftBox")[0];
var rightBox = document.getElementsByClassName("rightBox")[0];
  var randomLeft = Math.floor(Math.random()*450)+ 220;
  var leftString = randomLeft.toString() + "px";
  face.style.cssText += 'left :' + leftString + ';';
console.log(leftBox.toString());
  leftBox.appendChild(face);

  randomLeft += 500;
  clonedFace.style.cssText += 'left :' + randomLeft + 'px;';
  rightBox.appendChild(clonedFace);
}

function getLevelBasedNumber() {
  return level;
}

function createFace(){
  var face = document.createElement("img");
  face.setAttribute('src', 'img/smiley.png');
  face.style.cssText += 'position:absolute;';
  face.style.cssText += 'width:65px;';
  face.style.cssText += 'height : 65px';
  var randomTop = Math.floor(Math.random()*400)+ 200;
  face.style.cssText += 'top :' + randomTop + 'px;';
  return face;
}