let x = 0;
let f1 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/star.ttf")
}

function draw() {
  background ("pink");
  textSize(128);
  textFont(f1);
  text("You're a STAR!", x, 250);
  x += 5; 

  if (x > width) {
    x = -1500;
  }
}
