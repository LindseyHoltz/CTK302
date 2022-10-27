let cars = [];
let frogPos;
let state = 0; 
let timer = 0; 
let i1, i2, i3, i4, i5, i6, i7, i8, i9;
//var gif_loadImg, gif_createImg; 

function preload() {
  //gif_loadImg = loadImage("assets/cat.gif");
  //gif_createImg = loadImage("assets/cat.gif");
}

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  imageMode(CENTER);
  i1 = loadImage("assets/menu.jpg");
  //i2 = loadImage("assets/cat.gif");
  i3 = loadImage("assets/greymouse.png");
  i4 = loadImage("assets/greymouse2.jpg");
  i5 = loadImage("assets/whitemouse.png");
  i6 = loadImage("assets/whitemouse2.jpg");
  i7 = loadImage("assets/woodfloor.jpg");
  i8 = loadImage("assets/win.jpg");
  i9 = loadImage("assets/lose.jpg");

  // Spawn objects

  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 110);
}

function draw() {
  
  switch(state) {
    case 0: //menu
      image(i1, 400, 400); 
      text("click to start", width/2, height/2); 
      break;
      
    case 1: 
      image(i7, 400, 400, 800, 800); 
      game();
      timer++; 
      if(timer > 10*60) {
        timer = 0; 
        state = 3; 
      }
      break; 
      
    case 2: //win
      image(i8, 400, 400, 800, 800);
      break;
      
    case 3: //lose
      image(i9, 400, 400, 800, 800); 
      break;
      
      
  }
  
  
  
}

function resetTheGame() {
  
  cars = []; 
  
   for (let i = 0; i < 2; i++) {
    cars.push(new Car());
  }
  timer = 0; 
  
}




function mouseReleased() {
  switch(state) {
    case 0: // menu screen
      state = 1; 
      break;
    
    case 2: // win screen
      resetTheGame(); 
      state = 0; 
      break; 
      
    case 3: // lose screen
      resetTheGame(); 
      state = 0; 
      break; 
  }
}





function game() {
  //background("white");

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1);
    }
  }
  
  
  if (cars.length == 0) {
    state = 2; 
  }
  
  

  // add a "frog"
  //image(i2, frogPos.x, frogPos.y, 100, 215);
  //gif_createImg(frogPos.x, frogPos.y, 100, 215);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  
  if (frogPos.x > width) frogPos.x = 0 ; 
  if (frogPos.x < 0) frogPos.x = width ; 
  if (frogPos.y > height) frogPos.y = 0 ; 
  if (frogPos.y < 0) frogPos.y = height ; 
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), 100); // initialize your attributes here
    this.velocity = createVector(0, random(1, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);
    this.img = i3; 
    // this.type = random(3);
  }
  // methods

  display() {
    // this can be text, images, or shapes
    image (this.img, this.pos.x, this.pos.y, 50, 100);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
