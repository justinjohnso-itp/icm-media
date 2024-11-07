let webcam, refreshSlider, resolutionSlider;

function preload() {
  webcam = createCapture(VIDEO);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  webcam.size(width, height);
  webcam.loadPixels();
  webcam.hide();

  refreshSlider = new Slider("Framerate", 200, 7500, 500, 175);
  resolutionSlider = new Slider("Resolution", 5, 30, 15, 275);
}

function draw() {
  noStroke();
  webcam.loadPixels();

  // Rendering the rectangles for the "pixel" effect
  for (let i = 0; i < refreshSlider.value(); i++) {
    let randx = int(random(webcam.width));
    let randy = int(random(webcam.height));

    let offset = (randy * webcam.width + randx) * 4;
    let r = webcam.pixels[offset];
    let g = webcam.pixels[offset + 1];
    let b = webcam.pixels[offset + 2];
    let a = webcam.pixels[offset + 3];

    fill(r, g, b, a);
    rect(randx, randy, Math.abs(35 - resolutionSlider.value()));
  }

  // Rendering the "window" in the corner for the sliders
  fill("white");
  stroke(0, 0, 0);
  rect(width - 250, 0, 250, 275);
  noStroke();
  refreshSlider.drawLabel();
  resolutionSlider.drawLabel();
}

function windowResized() {
  resizeCanvas(width, height);
  // webcam.size(width, height);
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
    label.color("black");
  }
}
