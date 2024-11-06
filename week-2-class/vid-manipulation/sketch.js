let vid;

function setup() {
  createCanvas(500, 500);
  vid = createVideo("videos/iwaswrong.mp4");
  vid.position(0, 0); // Video positioning

  background(0);
  vid.size(width, height);
  vid.autoplay(false);
  vid.hide();
  vid.loop(); // Vid play
}

function draw() {
  // vid.speed(map(mouseX, 0, windowWidth, 0.1, 5));
  // vid.speed(-1); // not working in chrome

  vid.loadPixels();
  noStroke();

  let rx = int(random(width));
  let ry = int(random(height));
  let offset = (ry * width + rx) * 4;
  fill(vid.pixels[offset + 0], vid.pixels[offset + 1], vid.pixels[offset + 2]);
  for (let i = 0; i < 50; i++) {
    ellipse(rx, ry, 10, 10);
  }
}

// function mousePressed() {
//   let dur = vid.duration();
//   let randTime = random(dur);
//   vid.time(randTime);
//   console.log(randTime);
// }
