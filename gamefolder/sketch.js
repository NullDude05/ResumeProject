function setup() {
  createCanvas(700, 400);
  background(0);
}


let xSpeed = 10;
let ySpeed = 10;

let ballPositionX = Math.floor(Math.random() * 700)
let ballPositionY = Math.floor(Math.random() * 400)

let ballradius = 40;

function gameOver() {
  var d = dist(mouseX, mouseY, ballPositionX, ballPositionY);

  if (d < ballradius) {
    console.log("Game Over");
    location.href = "../endgamepage/endgame.html"
  }
}

function ballPhysics() {
  // debugger;

  ballPositionX += xSpeed;
  ballPositionY += ySpeed;

  if (ballPositionX > width) {
    xSpeed = -Math.abs(xSpeed);
  }

  if (ballPositionX < 0) {
    xSpeed = Math.abs(xSpeed);
  }

  if(ballPositionY > height) {
    ySpeed = -Math.abs(ySpeed);
  }

  if(ballPositionY < 0) {
    ySpeed = Math.abs(ySpeed);
  }
  
}

function createBall() {
  circle(ballPositionX, ballPositionY, ballradius);

  ballPhysics();
}


function draw() {
  background(0);
  gameOver();
  createBall();
  // debugger;
}

