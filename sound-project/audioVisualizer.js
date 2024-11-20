let song,
  button,
  amp,
  volHistory = [];

function setup() {
  createCanvas(400, 400);
  song = loadSound("audio/gman.mp3", loaded);
  amp = new p5.Amplitude();
  background(0);
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
  beginShape();
  for (var i = 0; i < volHistory.length; i++) {
    let y = map(volHistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();

  if (volHistory.length > width) {
    volHistory.splice(0, 1);
  }
}

function togglePlaying() {
  !song.isPlaying() && song.play();
}
