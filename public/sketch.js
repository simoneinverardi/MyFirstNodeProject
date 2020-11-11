let socket = io();

socket .on("connect", newConnection);

function newConnection(){
  console.log("your id: " + socket.id);
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background(200);

}

function draw() {
  // put drawing code here
}

function mouseMoved(){
  ellipse(mouseX,mouseY,20);
  //create the message
  let message = {
    x: mouseX,
    y: mouseY,
  };
  //send to the server
  socket.emit("mouse", message);
}
