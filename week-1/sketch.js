let spongebob;

function preload() {
  spongebob = loadImage("spongebob-150.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(spongebob, mouseX, mouseY);
}
