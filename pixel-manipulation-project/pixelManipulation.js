let webcam, refreshSlider, resolutionSlider;

function preload() {
  webcam = createCapture(VIDEO);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  webcam.size(width, height);
  webcam.loadPixels();
  webcam.hide();

  refreshSlider = new Slider("Refresh", 200, 10000, 500, 200);
  resolutionSlider = new Slider("Resolution", 10, 30, 15, 250);
}

function draw() {
  noStroke();
  webcam.loadPixels();

  for (let i = 0; i < refreshSlider.value(); i++) {
    let randx = int(random(webcam.width));
    let randy = int(random(webcam.height));

    let offset = (randy * webcam.width + randx) * 4;
    let r = webcam.pixels[offset];
    let g = webcam.pixels[offset + 1];
    let b = webcam.pixels[offset + 2];
    let a = webcam.pixels[offset + 3];

    fill(r, g, b, a);
    ellipse(randx, randy, resolutionSlider.value());

    // image(webcam, randx, r, width, height);
    // console.log(i);
  }
}

function windowResized() {
  resizeCanvas(width, height);
  webcam.size(width, height);
}

class Slider {
  constructor(label, min, max, def, offset) {
    // this.label = text(label, width - offset, 200);
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
}
