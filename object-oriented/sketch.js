// sample code: https://editor.p5js.org/DaBanBa/sketches/5N2aFWp4e
// slides: https://docs.google.com/presentation/d/1AevFkqumrCgqgxDuBP4EHf_VuhITEcZAZHFQHB7vS9w/edit?usp=sharing

let skybg, groundbg, waterbg;
let dogimg, catimg, birdimg, fishimg;
let allZooAnimals = [];

function preload() {
  skybg = loadImage("images/sky.jpg");
  groundbg = loadImage("images/grass.jpeg");
  waterbg = loadImage("images/water.jpg");
  dogimg = loadImage("images/dog.png");
  catimg = loadImage("images/cat.webp");
  birdimg = loadImage("images/bird.jpg");
  fishimg = loadImage("images/fish.jpg");
}

function setup() {
  createCanvas(600, 600);
  allZooAnimals.push(new Mammal("Dog", 3, 50, 50, dogimg));
  allZooAnimals.push(new Fish("Fish", 15, 50, 50, fishimg));
}

function draw() {
  let sectionHeight = height / 3;
  image(skybg, 0, 0, width, sectionHeight);
  image(groundbg, 0, sectionHeight, width, sectionHeight);
  image(waterbg, 0, sectionHeight * 2, width, sectionHeight);
  allZooAnimals[0].move();
  for (let animal of allZooAnimals) {
    animal.move();
  }
}

class Animal {
  constructor(species, speed, length, width, imgsrc) {
    this.species = species;
    this.speed = speed;
    this.length = length;
    this.width = width;
    this.posx = 0;
    this.posy = 400;
    this.imgsrc = imgsrc;
  }

  move() {
    image(this.imgsrc, this.posx, this.posy, this.width, this.length);
    this.posx += this.speed;
    if (this.posx >= 600 - this.length || this.posx <= 0) {
      this.speed = this.speed * -1;
    }
  }
}

class Mammal extends Animal {
  constructor(species, speed, length, width, imgsrc) {
    super(species, speed, length, width, imgsrc);
    this.posy = 200;
  }
}

class Fish extends Animal {
  constructor(species, speed, length, width, imgsrc) {
    super(species, speed, length, width, imgsrc);
    this.posy = 400;
  }

  move() {
    image(this.imgsrc, this.posx, this.posy, this.width, this.length);
    this.posx += this.speed - 1;
    if (this.posx >= 600 - this.length || this.posx <= 0) {
      this.speed = this.speed * -1;
    }
  }
}
