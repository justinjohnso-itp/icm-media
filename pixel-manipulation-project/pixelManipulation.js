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

  // refreshSlider.create(200);
  // refreshSlider.position(width - 200, 100);
  // refreshSlider.size(200);
  // refreshSlider.style("transform", "rotate(270deg)");

  // resolutionSlider.create(300);
  // resolutionSlider.position(width - 300, 100);
  // resolutionSlider.size(200);
  // resolutionSlider.style("transform", "rotate(270deg)");
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
