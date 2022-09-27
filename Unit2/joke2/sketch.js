let state = 0; 
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(20);
}

function draw() {

  switch(state) {
    case 0:
      background("pink"); 
      text("What do you call a fake noodle?", width/2, height/2);
      break;  

    case 1: 
    background("purple"); 
    text("An impasta!", width/2, height/2);
      break; 

  }

timer++ ;
if (timer > 4*60) {
  timer = 0; 
  state++ ;
  if (state > 1) { 
    state = 0; 
  }
}

}

