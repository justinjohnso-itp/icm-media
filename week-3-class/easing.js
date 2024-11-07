let xpos = 0; // 0 -> 1

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let eased = easeInOutElastic(xpos);
  circle(map(eased, 0, 1, 0, width), height / 2, 25);
  if (xpos < 1.0) {
    xpos += 0.01;
  }
}

// 0 -> 1 returns 0 -> 1
function easeInOutElastic(x) {
  const c5 = (2 * Math.PI) / 4.5;

  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}
