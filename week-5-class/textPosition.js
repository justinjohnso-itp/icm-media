function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  fill("green");
  stroke("white");
  strokeWeight(5);
  // textSize(48);
  // textSize(12 + map(mouseX, 0, width, 0, 144));
  // text("Wheeeeeeee", 50, 200);
  textAlign(CENTER, CENTER);

  push();
  translate(mouseX, mouseY);
  rotate(frameCount * 0.06);
  textSize(72);
  text("yee haw\ndawg", 0, 0);
  pop();

  // fill(200);
  // noStroke();
  // ellipse(50, 300, 15, 15);
}
