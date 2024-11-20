let song,
  button,
  amp,
  volHistory = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  song = loadSound("audio/gman.mp3", loaded);
  amp = new p5.Amplitude();
  angleMode(DEGREES);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  volHistory.push(vol);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let r = map(volHistory[i], 0, 1, 10, 500);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volHistory.length > 360) {
    volHistory.splice(0, 1);
  }
}

function togglePlaying() {
  !song.isPlaying() && song.play();
}
