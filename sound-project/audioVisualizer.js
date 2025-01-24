let song,
  button,
  fft,
  bands = 1024,
  w,
  easingSlider,
  particleSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  easingSlider = new Slider("Easing", 0, 99, 60, 175);
  particleSlider = new Slider("Particle Size", 4, 100, 5, 275);

  song = loadSound("audio/gman.mp3", loaded);
  fft = new p5.FFT(0.99, bands);
  w = width / bands;
  angleMode(DEGREES);
}

function loaded() {
  button = createButton("play");
  button.position(10, 10);
  button.mousePressed(togglePlaying);
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  let spectrumMap = spectrum.length - bands / 3;
  let lowOffset = 20;

  // Rendering the "window" in the corner for the sliders
  fill("white");
  stroke(0, 0, 0);
  rect(width - 250, 0, 250, 275);
  noStroke();
  easingSlider.drawLabel();
  particleSlider.drawLabel();

  // Spectrum Circle
  translate(width / 2 - width / 10, height / 2 - height / 8);
  rotate(90);
  beginShape();
  for (let i = lowOffset; i < spectrumMap; i++) {
    let angle = map(i, lowOffset, spectrumMap, 0, 180);
    let amp = spectrum[i];
    let r = map(amp, 0, 200, 1, (width + height) / 5);
    let x = r * cos(angle);
    let y = r * sin(angle);
    // vertex(x, y);
    fill(i, 255, 255);
    stroke(i, 255, 255);
    ellipse(x, y, particleSlider.value(), particleSlider.value() / 2);
    ellipse(x, -y, particleSlider.value(), particleSlider.value() / 2);
    // line(0, 0, x, y);
    // line(0, 0, x, -y);
  }
  endShape();

  // Spectrum Bars
  // noStroke();
  // for (let i = 0; i < spectrum.length; i++) {
  //   let amp = spectrum[i];
  //   let y = map(amp, 0, height, height, 0);
  //   fill(i, 255, 255);
  //   rect(i * w, y, w - 1, height - y);
  // }
  // noFill();

  // Amp Circle
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

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
  }
  song.jump(57); // start at jazzy part
  // song.jump(120);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Slider {
  constructor(label, min, max, def, offset) {
    this.label = label;
    this.min = min;
    this.max = max;
    this.def = def;
    this.offset = offset;
    this.slider = createSlider(this.min, this.max, this.def);
    this.slider.size(200);
    this.slider.style("transform", "rotate(270deg)");
    this.slider.position(width - offset, 100);
  }

  value() {
    return this.slider.value();
  }

  drawLabel() {
    fill("black");
    let label = text(this.label, width - this.offset + 70, 250);
    label.textSize(15);
    label.color("white");
  }
}
