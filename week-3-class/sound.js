let orchestra;

function preload() {
  orchestra = loadSound("audio/orchestra.wav");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (orchestra.isPlaying()) {
    // console.log(orchestra.smooth());
    ellipse(width / 2, height / 2, 50, 50);
  }
}

function mousePressed() {
  orchestra.rate(map(mouseY, 0, height, 0, 2));
  orchestra.amp(map(mouseX, 0, width, 0, 1));
  orchestra.play();
}
