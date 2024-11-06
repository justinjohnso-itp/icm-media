let cap;
let gridWidth = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cap = createCapture(VIDEO);
  cap.size(width, height);
  cap.hide();
}

function draw() {
  background(220);
  cap.loadPixels();
  noStroke();
  for (let i = 0; i < width; i += gridWidth) {
    for (let j = 0; j < height; j += gridWidth) {
      let offset = (j * width + i) * 4;
      fill(
        cap.pixels[offset + 0],
        cap.pixels[offset + 1],
        cap.pixels[offset + 2]
      );
      // rect(i, j, gridWidth, gridWidth);
      ellipse(i, j, gridWidth + 10, gridWidth + 10);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
