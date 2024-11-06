let bob, spongebobBig;

function preload() {
  [
    (bob = loadImage("images/spongebob-150.png")),
    // (spongebobBig = loadImage("images/spongebob.jpg")),
  ];
}

function setup() {
  createCanvas(500, 500);
  // console.log(bob.width, bob.height);
  // console.log(bob.get(100, 100));
  bob.loadPixels();
  console.log(bob.pixels[245]);
}

function draw() {
  // background(220);
  noStroke();

  // draw 10 times per frame
  // without the loop, it would draw once per frame
  for (let i = 0; i < 50; i++) {
    let randx = int(random(bob.width));
    let randy = int(random(bob.height));

    // sampling RGB values to swap them around in fill() and circle() commands
    // let sample = bob.get(randx, randy);
    // let r = sample[0];
    // let g = sample[1];
    // let b = sample[2];
    // let a = sample[3];

    // let offset = ((y*imageWidth)+x)*4;
    // y coordinate times width, plus x coord, times 4 (number of rgba args)
    let offset = (randy * bob.width + randx) * 4;
    let r = bob.pixels[offset];
    let g = bob.pixels[offset + 1];
    let b = bob.pixels[offset + 2];
    let a = bob.pixels[offset + 3];

    fill(r, g, b, a);
    // fill(bob.get(randx, randy)); // fills image
    // circle(randx, randy, 10, 10);
    circle(
      map(randx, 0, bob.width, 0, width),
      map(randy, 0, bob.height, 0, height),
      map(r, 0, 255, 0, 25)
    );
  }
  // image(spongebobSmall, mouseX + 75, mouseY - 75, 150, 150);
  // image(spongebobBig, mouseX - 75, mouseY + 75, 150, 150);
}
