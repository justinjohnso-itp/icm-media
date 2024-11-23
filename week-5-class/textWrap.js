function preload() {
  myFont = loadFont("fonts/Pilowlava-Atome.otf");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(200);

  // noFill();
  // stroke(0);
  // rect(100, 100, 200, 200);

  // fill(0);
  // textFont("Papyrus");
  // textFont(myFont);
  // textSize(24);
  // text(
  //   "It was the best of times, it was the worst of times",
  //   100,
  //   100,
  //   200,
  //   200
  // );

  let points = myFont.textToPoints("quartz sphinx", 100, 100, 48);
  for (let i = 0; i < points.length; i++) {
    ellipse(
      points[i].x,
      points[i].y + sin(points[i].x + frameCount * 0.2) * 10,
      4,
      4
    );
  }
}
