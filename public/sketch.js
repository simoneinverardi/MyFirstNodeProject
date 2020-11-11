let socket = io();
let myColor = "white";
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);

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
  background("purple");
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
