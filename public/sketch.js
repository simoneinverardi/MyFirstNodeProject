let socket = io();
let myColor = "white";
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer);

function newPlayer(newPlayerColor) {
  console.log(newPlayerColor);
  push();
  fill("purple");
  rectMode(CENTER);
  noStroke();
  rect(width/2, height/2, 600, 50);
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(newPlayerColor);
  text("New player joined: " + newPlayerColor, width/2, height/2);
  pop();
}

function setColor(assignedColor){
  myColor = assignedColor;
}

function newConnection(){
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data){
  push();
  noStroke();
  fill(data.color);
  ellipse(data.x, data.y, 10);
  pop();
}



function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  push();
  background("purple");
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(myColor);
  text( "Welcome: " + myColor, width/2, height/2);
  pop();
}

function draw() {
  // put drawing code here
}

function mouseMoved(){
  push();
  noStroke();
  fill(myColor);
  ellipse(mouseX, mouseY, 20);
  pop();
  //create the message as object
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  }
  //send the message to the server
  socket.emit("mouse", message);
}
