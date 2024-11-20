let song,
  button,
  fft,
  bands = 64,
  w;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  song = loadSound("audio/gman.mp3", loaded);
  fft = new p5.FFT(0.6, bands);
  w = width / bands;
  angleMode(DEGREES);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, height, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w - 1, height - y);
  }
  noFill();

  // Circle
  // translate(width / 2, height / 2);
  // beginShape();
  // for (let i = 0; i < 360; i++) {
  //   let r = map(volHistory[i], 0, 1, 10, 500);
  //   let x = r * cos(i);
  //   let y = r * sin(i);
  //   vertex(x, y);
  // }
  // endShape();

  // if (volHistory.length > 360) {
  //   volHistory.splice(0, 1);
  // }
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
  }
  song.jump(57); // start at jazzy part
}
