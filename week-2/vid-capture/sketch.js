function setup() {
  createCanvas(500, 400);
  cap = createCapture(VIDEO);
  cap.hide();
}

function draw() {
  background(220);
  for (let i = 0; i < 6; i++) {
    tint(0, 0, 255, 255 - i * 30);
    image(cap, i * 100 + 25, height / 2, 50, 50);
  }
}
