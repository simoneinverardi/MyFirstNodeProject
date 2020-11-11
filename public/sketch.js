let socket = io();
let myColor = "white";

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);

function setColor(assignedColor) {
  myColor = assignedColor;

}

function newConnection(){
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data) {
  push();
  fill(data.color);
  ellipse(data.x, data.y, 10);
  pop();
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background(200);
  noStroke();

}

function draw() {
  // put drawing code here
}

function mouseMoved(){
  push();
  fill(myColor);
  ellipse(mouseX,mouseY,20);
  pop();
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  };
  //send to the server
  socket.emit("mouse", message);
}
