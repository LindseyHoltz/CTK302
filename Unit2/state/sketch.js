let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("rgb(245,218,223)");
      fill("rgb(228,52,138)");
      //text("in state 0", 100, 100);
      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          rect(i, j, 20, 20);
        }
      }
      break;

    case 1:
      background("purple");
      //text("in state 1", 100, 100);
      push();
      fill("rgb(184,74,246)");
      stroke(0);
      strokeWeight(2);

      for (let j = 0; j < height; j += 40) {
        for (let i = 0; i < width; i += 40) {
          arc(i, j, 80, 80, 0, PI + QUARTER_PI, PIE);
        }
      }
      pop();

      push();
      stroke("white");
      strokeWeight(2);
      fill("rgb(228,62,178)");
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          ellipse(i * 40, j * 40, i + j, i + j);
        }
      }
      pop();
      break;

    case 2:
      background("rgb(49,177,211)");
      //text("in state 2", 100, 100);
      fill("rgb(107,129,245)");
      stroke("white");
      strokeWeight(2);

      for (let j = 0; j < height; j += 25) {
        for (let i = 0; i < width; i += 5) {
          ellipse(i, j, 45, 45);
        }
      }
      break;

    case 3:
      background("rgb(69,69,150)");
      //text("in state 3", 100, 100);
      fill("rgb(107,129,245)");
      stroke("white");
      strokeWeight(2);

      for (let j = 0; j < height; j += 20) {
        for (let i = 0; i < width; i += 20) {
          rect(i, j, 10, 30);
          push();
          fill("rgb(124,139,106)");
          rect(i, j, 30, 10);
          pop();
        }
      }
      break;

    case 4:
      background("rgb(140,53,141)");
      //text("in state 4", 100, 100);
      fill("rgb(177,71,228)");
      for (let j = 0; j < height; j += 45) {
        for (let i = 0; i < width; i += 45) {
          ellipse(i, j, 35, 35);
        }
      }

      fill("rgb(229,236,82)");
      stroke("white");
      strokeWeight(2);

      for (let j = 0; j < height; j += 45) {
        for (let i = 0; i < width; i += 45) {
          rect(i, j, 20, 20);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}

