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
      background("lightgreen"); 
      text("What do you call and alligator in a vest?", width/2, height/2);
      break;  

    case 1: 
    background("lightblue"); 
    text("An investigator!", width/2, height/2);
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

