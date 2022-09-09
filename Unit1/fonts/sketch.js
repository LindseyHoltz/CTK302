let f1, f2, f3 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/franchise.ttf");
  f2 = loadFont("assets/fridaybeach.ttf");
  f3 = loadFont("assets/star.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48);
  text("It's over Anakin! I have the high ground!", 0, 100, 490);
  textFont(f2, 24);
  text("You underestimate my power!", width/2, 250);
  textFont(f3, 16);
  text("Don't try it!", width/2, 350);
}
